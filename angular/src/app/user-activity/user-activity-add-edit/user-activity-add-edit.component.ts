import { ThemeSharedModule, ToasterService } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserActivityDto, UserActivityService, UserProfileDto, UserProfileService } from '@proxy/fitness-tracker';
import { constants, messages } from './../../../environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-user-activity-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ThemeSharedModule],
  templateUrl: './user-activity-add-edit.component.html',
  styleUrl: './user-activity-add-edit.component.scss'
})
export class UserActivityAddEditComponent implements OnInit {
  toasterService = inject(ToasterService);
  userActivityService = inject(UserActivityService);
  activeModal = inject(NgbActiveModal);
  isAddMode = false;

  loading = false;
  fg: FormGroup;

  @Input() model: UserActivityDto;

  ngOnInit(): void {
    this.fg = new FormGroup({
      id: new FormControl(this.model.id, [Validators.required]),
      userProfileId: new FormControl(this.model.userProfileId, [Validators.required]),
      location: new FormControl(this.model.location, [Validators.required]),
      started: new FormControl(moment(this.model.started).format('YYYY-MM-DD'), [Validators.required]),
      startedTime: new FormControl(moment(this.model.started).format('HH:mm'), [Validators.required]),
      ended: new FormControl(moment(this.model.ended).format('YYYY-MM-DD'), [Validators.required]),
      endedTime: new FormControl(moment(this.model.ended).format('HH:mm'), [Validators.required]),
      distance: new FormControl(this.model.distance, [Validators.required]),
      duration: new FormControl(this.model.duration, [Validators.required]),
      averagePace: new FormControl(this.model.averagePace, [Validators.required]),
    });

    this.fg.get('duration').disable();
    this.fg.get('averagePace').disable();

    this.isAddMode = this.model.id == constants.EMPTY_GUID;
  }

  computeDurationAndAvePace(): void {
    const started = this.fg.get('started').value;
    const ended = this.fg.get('ended').value;
    const startedTime = this.fg.get('startedTime').value;
    const endedTime = this.fg.get('endedTime').value;

    const fromTime = moment(`${started} ${startedTime}`);
    const toTime = moment(`${ended} ${endedTime}`);

    const distance = +this.fg.get('distance').value;

    const durationInMinutes = moment.duration((toTime).diff(fromTime)).asMinutes();

    const avePace = distance < 1 ? '0' : (+durationInMinutes / distance).toFixed(2); 

    this.fg.get('duration').setValue(durationInMinutes);
    this.fg.get('averagePace').setValue(+avePace);
  }


  onSave(): void {
    if (this.fg.invalid) {
      return;
    }
    
    this.loading = true;
    
    const started = this.fg.get('started').value;
    const ended = this.fg.get('ended').value;
    const startedTime = this.fg.get('startedTime').value;
    const endedTime = this.fg.get('endedTime').value;

    const fromTime = moment(`${started} ${startedTime}`);
    const toTime = moment(`${ended} ${endedTime}`);

    const model =  this.fg.value; 

    model.started = moment(fromTime).format('YYYY-MM-DD HH:mm');
    model.ended = moment(toTime).format('YYYY-MM-DD HH:mm');

    const id = this.fg.get('id').value;

    let svc: any;
    let msg = '';

    if (id == constants.EMPTY_GUID) {
      svc = this.userActivityService.create(model);
      msg = messages.created;
    } else {
      svc = this.userActivityService.update(id, model);
      msg = messages.updated;
    }

    svc.subscribe({
      next: (value) => {
        this.loading = false;
        this.toasterService.success(msg);
        this.activeModal.close(value);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }
}
