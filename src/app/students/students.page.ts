import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { EditStudentModalComponent } from '../edit-student-modal/edit-student-modal.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students: any[] = [];
  newStudent: any = { name: '', email: '' };

  constructor(private apiService: ApiService, private modalController: ModalController) {}

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.apiService.getStudents().subscribe(
      (data: any) => this.students = data,
      (error: any) => console.error('Error fetching students:', error)
    );
  }

  addStudent() {
    if (this.newStudent.name && this.newStudent.email) {
      this.apiService.createStudent(this.newStudent).subscribe(
        (data: any) => {
          this.students.push(data);
          this.newStudent = { name: '', email: '' };
          console.log('Student added successfully:', data);
        },
        (error: any) => console.error('Error creating student:', error)
      );
    } else {
      console.error('Name and email are required');
    }
  }

  async editStudent(student: any) {
    const modal = await this.modalController.create({
      component: EditStudentModalComponent,
      componentProps: { student }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.apiService.updateStudent(result.data).subscribe(
          (data: any) => {
            const index = this.students.findIndex(s => s.id === data.id);
            if (index !== -1) {
              this.students[index] = data;
            }
            console.log('Student updated successfully:', data);
          },
          (error: any) => console.error('Error updating student:', error)
        );
      }
    });

    return await modal.present();
  }

  deleteStudent(studentId: number) {
    this.apiService.deleteStudent(studentId).subscribe(
      () => {
        this.students = this.students.filter(s => s.id !== studentId);
        console.log('Student deleted successfully');
      },
      (error: any) => console.error('Error deleting student:', error)
    );
  }
}