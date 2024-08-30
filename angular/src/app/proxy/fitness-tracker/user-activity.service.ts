import type { UserActivityCreateUpdateDto, UserActivityDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserActivityService {
  apiName = 'Default';
  

  create = (input: UserActivityCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserActivityDto>({
      method: 'POST',
      url: '/api/app/user-activity',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/user-activity/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserActivityDto>({
      method: 'GET',
      url: `/api/app/user-activity/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UserActivityDto>>({
      method: 'GET',
      url: '/api/app/user-activity',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UserActivityCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserActivityDto>({
      method: 'PUT',
      url: `/api/app/user-activity/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
