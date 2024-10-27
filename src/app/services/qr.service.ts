import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private firestore: AngularFirestore) { }

  addStudentRecord(student: { name: string, subject: string, section: string }) {
    return this.firestore.collection('students').add(student);
  }

  getStudents() {
    return this.firestore.collection('students').snapshotChanges();
  }
}