import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private firestore: AngularFirestore) { }

  async setItem(collection: string, key: string, value: any): Promise<void> {
    await this.firestore.collection(collection).doc(key).set(value, { merge: true });
  }

  async getItem(collection: string, key: string): Promise<any> {
    const doc = await this.firestore.collection(collection).doc(key).get().toPromise();
    return doc?.data();
  }

  async removeItem(collection: string, key: string): Promise<void> {
    await this.firestore.collection(collection).doc(key).delete();
  }

  async updateAttendance(key: string, increment: number): Promise<void> {
    const attendanceRef = this.firestore.collection('attendance').doc(key);
    await this.firestore.firestore.runTransaction(async (transaction) => {
      const doc = await transaction.get(attendanceRef.ref);
      if (!doc.exists) {
        transaction.set(attendanceRef.ref, { attendance: increment });
      } else {
        const data = doc.data() as { attendance: number };
        const newAttendance = Math.min((data.attendance || 0) + increment, 100);
        transaction.update(attendanceRef.ref, { attendance: newAttendance });
      }
    });
  }

  async addStudentToCourse(courseId: number, student: { name: string, attendance: number, scanned: boolean }): Promise<void> {
    const courseRef = this.firestore.collection('cursos').doc(`curso${courseId}`);
    await this.firestore.firestore.runTransaction(async (transaction) => {
      const doc = await transaction.get(courseRef.ref);
      if (!doc.exists) {
        transaction.set(courseRef.ref, { students: [student] });
      } else {
        const data = doc.data() as { students: any[] };
        const students = data.students || [];
        const existingStudentIndex = students.findIndex(s => s.name === student.name);
        if (existingStudentIndex !== -1) {
          students[existingStudentIndex] = student;
        } else {
          students.push(student);
        }
        transaction.update(courseRef.ref, { students });
      }
    });
  }
}