import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(`${API_URL}students/`);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`${API_URL}students/`, student);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put(`${API_URL}students/${student.id}/`, student);
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${API_URL}students/${studentId}/`);
  }
}