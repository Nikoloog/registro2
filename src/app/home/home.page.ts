import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  role: string = '';
  students: any[] = [];
  selectedStudent: any = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.username = params['username'];
      this.role = params['role'];
    });
    this.fetchStudents();
  }

  fetchStudents() {
    this.apiService.getStudents().subscribe(
      (data: any) => this.students = data,
      (error: any) => console.error('Error fetching students:', error)
    );
  }

  addStudent() {
    const newStudent = { name: 'New Student', email: 'student@example.com' };
    this.apiService.createStudent(newStudent).subscribe(
      (data: any) => {
        this.students.push(data);
        console.log('Student added successfully:', data);
      },
      (error: any) => console.error('Error creating student:', error)
    );
  }

  editStudent(student: any) {
    this.selectedStudent = { ...student }; // Clonar el objeto para evitar cambios directos
  }

  saveStudent() {
    if (this.selectedStudent) {
      this.apiService.updateStudent(this.selectedStudent).subscribe(
        (data: any) => {
          const index = this.students.findIndex(s => s.id === data.id);
          if (index !== -1) {
            this.students[index] = data;
          }
          this.selectedStudent = null;
          console.log('Student updated successfully:', data);
        },
        (error: any) => console.error('Error updating student:', error)
      );
    }
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

  cancelEdit() {
    this.selectedStudent = null;
  }
}