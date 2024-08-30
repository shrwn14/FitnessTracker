import type { UserProfileCreateUpdateDto, UserProfileDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  apiName = 'Default';
  

  create = (input: UserProfileCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserProfileDto>({
      method: 'POST',
      url: '/api/app/user-profile',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserProfileDto>({
      method: 'GET',
      url: `/api/app/user-profile/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UserProfileCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserProfileDto>({
      method: 'PUT',
      url: `/api/app/user-profile/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
