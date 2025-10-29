import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  close() {
    this.modalService.close();
  }
}