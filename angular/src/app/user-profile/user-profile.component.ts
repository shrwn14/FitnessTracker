import { ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { ThemeSharedModule, ToasterService } from '@abp/ng.theme.shared';
import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileDto, UserProfileService } from '@proxy/fitness-tracker';
import { UserActivityComponent } from '../user-activity/user-activity.component';
import { ModalModel, UtilService } from '../shared/services/util-service';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgbNavModule, DatePipe, CommonModule, UserActivityComponent,
    ThemeSharedModule, NgbTooltipModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit  {

  active = 1;
  loading = false;
  activatedRoute = inject(ActivatedRoute);
  toasterService = inject(ToasterService);
  modalService = inject(NgbModal);
  userProfleService = inject(UserProfileService);
  config = inject(ConfigStateService);
  utilService = inject(UtilService);
  
  userProfile: UserProfileDto;
  currentUser: CurrentUserDto;

  ngOnInit(): void {
    this.loading = true;

    this.config.getOne$('currentUser').subscribe( user  => {
      this.currentUser = user;
    });

    this.getUserProfile();
  }

  getUserProfile(): void {
    this.userProfleService.get(this.currentUser.id).subscribe({
      next : res => {
      this.userProfile = res;
      this.loading = false;
      },
      error: err => {
        this.loading = false;
      }
    });
  }

  openEditModal(): void {
    this.utilService.modalRef({
      content: UserProfileEditComponent,
      size: 'md',
      data: this.userProfile,
      componentInstanceName: 'model',
      cbFunc: (): void => {
        this.getUserProfile();
      }
    } as ModalModel);
	}

}
