import type { SysEmploymentStatusCreateUpdateDto, SysEmploymentStatusDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysEmploymentStatusService {
  apiName = 'Default';
  

  create = (input: SysEmploymentStatusCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysEmploymentStatusDto>({
      method: 'POST',
      url: '/api/app/sys-employment-status',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-employment-status/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysEmploymentStatusDto>({
      method: 'GET',
      url: `/api/app/sys-employment-status/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysEmploymentStatusDto>>({
      method: 'GET',
      url: '/api/app/sys-employment-status',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysEmploymentStatusCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysEmploymentStatusDto>({
      method: 'PUT',
      url: `/api/app/sys-employment-status/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
