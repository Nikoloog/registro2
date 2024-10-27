import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';

interface Student {
  name: string;
  grade: string;
}

interface StudentsByCourse {
  [key: string]: Student[];
}

@Component({
  selector: 'app-listar-reprobados',
  templateUrl: './listar-reprobados.page.html',
  styleUrls: ['./listar-reprobados.page.scss'],
})
export class ListarReprobadosPage implements OnInit {
  username: string = '';
  courses = [
    { name: 'Curso 1', link: '/curso1-reprobados' },
    { name: 'Curso 2', link: '/curso2-reprobados' }
  ];

  
  studentsByCourse: StudentsByCourse = {
    'Curso 1': [
      { name: 'Nicolas Fernandez', grade: 'Reprobado' },
      { name: 'María López', grade: 'Reprobado' },
    ],
    'Curso 2': [
      { name: 'Nicolas Fernandez', grade: 'Reprobado' },
      { name: 'María López', grade: 'Reprobado' },

    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Nombre del Profesor';
    });
  }

  downloadExcel(courseName: string) {
    const students = this.studentsByCourse[courseName] || [];
    const transformedData = students.map(student => ({
      'Nombre': student.name,
      'Calificación': student.grade
    }));
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(transformedData);
    const workbook: XLSX.WorkBook = { Sheets: { 'Reprobados': worksheet }, SheetNames: ['Reprobados'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, courseName);
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = `${fileName}_reprobados.xlsx`;
    link.click();
  }

  goBack() {
    this.router.navigate(['/professor-home'], { queryParams: { username: this.username } });
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';