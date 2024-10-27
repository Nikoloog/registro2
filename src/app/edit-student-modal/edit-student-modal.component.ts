import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-student-modal',
  templateUrl: './edit-student-modal.component.html',
  styleUrls: ['./edit-student-modal.component.scss'],
})
export class EditStudentModalComponent {
  @Input() student: any;

  constructor(private modalController: ModalController) {}

  save() {
    this.modalController.dismiss(this.student);
  }

  cancel() {
    this.modalController.dismiss();
  }
}