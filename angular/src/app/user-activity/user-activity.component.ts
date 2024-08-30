import { Component, Input, OnInit, inject } from '@angular/core';
import { IDataSourceColumn } from '../models';
import { UserActivityDto, UserActivityService } from '@proxy/fitness-tracker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridViewComponent } from '../shared/grid-view/grid-view.component';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { ConfigStateService, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ModalModel, UtilService } from '../shared/services/util-service';
import { UserActivityAddEditComponent } from './user-activity-add-edit/user-activity-add-edit.component';
import { constants } from './../../environments/environment';
import * as moment from 'moment';
import { ConfirmationMessageModel } from '../shared/confirmation-message/confirmation-message.component';

@Component({
  selector: 'app-user-activity',
  standalone: true,
  imports: [CommonModule, FormsModule, GridViewComponent, RouterLink, ThemeSharedModule, NgbTooltipModule],
  templateUrl: './user-activity.component.html',
  styleUrl: './user-activity.component.scss'
})
export class UserActivityComponent implements OnInit {
  columns: IDataSourceColumn[] = [
    { propertyLabel: 'Location', propertyName: 'location' },
    { propertyLabel: 'Started', propertyName: 'started', dataType: 'datetime' },
    { propertyLabel: 'Ended', propertyName: 'ended', dataType: 'datetime' },
    { propertyLabel: 'Dist(km)', propertyName: 'distance', dataType: 'number' },
    { propertyLabel: 'Duration', propertyName: 'humanizedDuration' },
    { propertyLabel: 'Ave. Pace', propertyName: 'averagePace' },
  ];

  dataSource: UserActivityDto[];
  totalCount: number;
  page = 1;
  pageSize = 100;
  loading = false;
  filter = {
    maxResultCount: 1000
  } as PagedAndSortedResultRequestDto;

  @Input() userProfileId: string;
  userActivityService = inject(UserActivityService);
  config = inject(ConfigStateService);
  utilService = inject(UtilService);

  newUserActivity = { 
    id: constants.EMPTY_GUID,
    userProfileId: '',
  } as UserActivityDto;

  ngOnInit(): void {
    this.config.getOne$('currentUser').subscribe( user  => {
      this.userProfileId = user.id;
      this.newUserActivity.userProfileId = user.id;
    });

    this.getActivityList(this.filter);
  }

  getActivityList(input: PagedAndSortedResultRequestDto): void {
    this.loading = true;
    this.userActivityService.getList(input).subscribe(res => {
      this.dataSource = res.items;
      this.totalCount = res.totalCount;
      this.loading = false;
    });
  }

  openAddEditModal(data: UserActivityDto): void {
    this.utilService.modalRef({
      content: UserActivityAddEditComponent,
      size: 'md',
      data: data,
      componentInstanceName: 'model',
      cbFunc: (): void => {
        this.getActivityList(this.filter);
      }
    } as ModalModel);
	}

  onConfirmDelete(data: UserActivityDto): void {
    this.utilService.confirmModal(this.utilService.defaultDangerMessage(), () => { 
      this.userActivityService.delete(data.id).subscribe({
        next: value => {
          this.getActivityList(this.filter);
        },
        error: err => {
          this.loading = false;
        }
      });
      
      
    });
  }
}
