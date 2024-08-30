import type { SysCalendarCreateUpdateDto, SysCalendarDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysCalendarService {
  apiName = 'Default';
  

  create = (input: SysCalendarCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCalendarDto>({
      method: 'POST',
      url: '/api/app/sys-calendar',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createByYear = (year: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCalendarDto[]>({
      method: 'POST',
      url: '/api/app/sys-calendar/by-year',
      params: { year },
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-calendar/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCalendarDto>({
      method: 'GET',
      url: `/api/app/sys-calendar/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByYear = (year: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCalendarDto[]>({
      method: 'GET',
      url: '/api/app/sys-calendar/by-year',
      params: { year },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysCalendarDto>>({
      method: 'GET',
      url: '/api/app/sys-calendar',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getYears = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, number[]>({
      method: 'GET',
      url: '/api/app/sys-calendar/years',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysCalendarCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCalendarDto>({
      method: 'PUT',
      url: `/api/app/sys-calendar/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
