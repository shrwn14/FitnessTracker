import type { SysWTaxTableCreateUpdateDto, SysWTaxTableDto, SysWTaxTablePagedAndSortedResultRequestDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysWTaxTableService {
  apiName = 'Default';
  

  create = (input: SysWTaxTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysWTaxTableDto>({
      method: 'POST',
      url: '/api/app/sys-wTax-table',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-wTax-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysWTaxTableDto>({
      method: 'GET',
      url: `/api/app/sys-wTax-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: SysWTaxTablePagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysWTaxTableDto>>({
      method: 'GET',
      url: '/api/app/sys-wTax-table',
      params: { wTaxTypes: input.wTaxTypes, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysWTaxTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysWTaxTableDto>({
      method: 'PUT',
      url: `/api/app/sys-wTax-table/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
