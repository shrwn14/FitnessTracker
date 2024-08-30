import type { SysPagIbigTableCreateUpdateDto, SysPagIbigTableDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysPagIbigTableService {
  apiName = 'Default';
  

  create = (input: SysPagIbigTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysPagIbigTableDto>({
      method: 'POST',
      url: '/api/app/sys-pag-ibig-table',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-pag-ibig-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysPagIbigTableDto>({
      method: 'GET',
      url: `/api/app/sys-pag-ibig-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysPagIbigTableDto>>({
      method: 'GET',
      url: '/api/app/sys-pag-ibig-table',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysPagIbigTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysPagIbigTableDto>({
      method: 'PUT',
      url: `/api/app/sys-pag-ibig-table/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
