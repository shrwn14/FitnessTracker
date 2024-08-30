import { Injectable, inject } from "@angular/core"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { messages } from "src/environments/environment";
import { ConfirmationMessageComponent, ConfirmationMessageModel } from "../confirmation-message/confirmation-message.component";

@Injectable({
    providedIn: 'root'
  })
export class UtilService {
    modalService = inject(NgbModal);

    modalRef(model: ModalModel): void {
        const modal = this.modalService.open(model.content, {
            centered: true, 
            backdrop: 'static', 
            keyboard: true,
            size: model.size
          });

        modal.componentInstance[model.componentInstanceName] = model.data;

        modal.result.then((result) => {
          if (result) {
              model.cbFunc();
          }
        },
        (reason) => {
          console.log('reason: ', reason);
        });
    }
  
  deleteModal(cbFunc: () => void): void {
    this.modalRef({
      content: ConfirmationMessageComponent,
      size: 'md',
      data: this.defaultDangerMessage(),
      componentInstanceName: 'model',
      cbFunc: cbFunc
    } as ModalModel);
  }

  confirmModal(model: ConfirmationMessageModel, cbFunc: () => void): void {
    this.modalRef({
      content: ConfirmationMessageComponent,
      size: 'md',
      data: model,
      componentInstanceName: 'model',
      cbFunc: cbFunc
    } as ModalModel);
  }

  defaultDangerMessage(): ConfirmationMessageModel {
    const model = {
      message: messages.confirm_delete,
      color: 'danger'
    } as ConfirmationMessageModel; 

    return model;
  }

  formatNumber(n?: number): string {

    if (n == null) {
      return '';
    }

    return new Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(n);
  }
}

export interface ModalModel {
  content: any;
  size: string,
  componentInstanceName: string,
  data: any;
  cbFunc: () => void;
}