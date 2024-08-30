import type { SysPhilHealthTableCreateUpdateDto, SysPhilHealthTableDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysPhilHealthTableService {
  apiName = 'Default';
  

  create = (input: SysPhilHealthTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysPhilHealthTableDto>({
      method: 'POST',
      url: '/api/app/sys-phil-health-table',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-phil-health-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysPhilHealthTableDto>({
      method: 'GET',
      url: `/api/app/sys-phil-health-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysPhilHealthTableDto>>({
      method: 'GET',
      url: '/api/app/sys-phil-health-table',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysPhilHealthTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysPhilHealthTableDto>({
      method: 'PUT',
      url: `/api/app/sys-phil-health-table/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
