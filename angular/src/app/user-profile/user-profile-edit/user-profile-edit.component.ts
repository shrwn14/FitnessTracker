import { ThemeSharedModule, ToasterService } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileDto, UserProfileService } from '@proxy/fitness-tracker';
import { messages } from './../../../environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-user-profile-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ThemeSharedModule],
  templateUrl: './user-profile-edit.component.html',
  styleUrl: './user-profile-edit.component.scss'
})
export class UserProfileEditComponent implements OnInit {
  toasterService = inject(ToasterService);
  userProfileService = inject(UserProfileService);
  activeModal = inject(NgbActiveModal);

  loading = false;
  fg: FormGroup;

  @Input() model: UserProfileDto;

  ngOnInit(): void {
    this.fg = new FormGroup({
      id: new FormControl(this.model.id, [Validators.required]),
      name: new FormControl(this.model.name, [Validators.required]),
      weight: new FormControl(this.model.weight, [Validators.required]),
      height: new FormControl(this.model.height, [Validators.required]),
      birthdate: new FormControl(moment(this.model.birthdate).format('YYYY-MM-DD'), [Validators.required]),
      age: new FormControl(this.model.age, [Validators.required]),
      bmi: new FormControl(this.model.bmi, [Validators.required]),
    });

    this.fg.get('age').disable();
    this.fg.get('bmi').disable();
  }

  computeAge(event: any): void {
    this.fg.get('age').setValue(moment().diff(event.target.value, 'years'));
  }

  computeBmi(): void {
    const wt = +this.fg.get('weight').value;
    const ht = +this.fg.get('height').value;

    let bmi = this.fg.get('bmi');

    if (ht < 1 ) {
      bmi.setValue(0);
      return;
    }

    const htInMeters = +ht / 100;
    const result = (wt / (htInMeters * htInMeters)).toFixed(2);
    bmi.setValue(result)

  }

  onSave(): void {
    if (this.fg.invalid) {
      return;
    }
    
    this.loading = true;
    const model =  this.fg.value; 
    const id = this.fg.get('id').value;

    this.userProfileService.update(id, model).subscribe({
      next: (value) => {
        this.loading = false;
        this.toasterService.success(messages.updated);
        this.activeModal.close(value);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }
}
