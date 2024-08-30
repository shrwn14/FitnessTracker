import type { SysScheduleCreateUpdateDto, SysScheduleDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysScheduleService {
  apiName = 'Default';
  

  create = (input: SysScheduleCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysScheduleDto>({
      method: 'POST',
      url: '/api/app/sys-schedule',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-schedule/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysScheduleDto>({
      method: 'GET',
      url: `/api/app/sys-schedule/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysScheduleDto>>({
      method: 'GET',
      url: '/api/app/sys-schedule',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysScheduleCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysScheduleDto>({
      method: 'PUT',
      url: `/api/app/sys-schedule/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
