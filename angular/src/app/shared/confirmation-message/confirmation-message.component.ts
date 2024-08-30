import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-message',
  standalone: true,
  imports: [ CommonModule, ThemeSharedModule],
  templateUrl: './confirmation-message.component.html',
  styleUrl: './confirmation-message.component.scss'
})
export class ConfirmationMessageComponent {
  activeModal = inject(NgbActiveModal);
  @Input() model: ConfirmationMessageModel; 
}

export interface ConfirmationMessageModel {
  color: 'danger' | 'info' | 'warning',
  yesBtnText: string;
  noBtnText: string;
  message: string;
}
