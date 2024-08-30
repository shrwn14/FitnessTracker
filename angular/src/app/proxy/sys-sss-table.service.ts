import type { SysSssTableCreateUpdateDto, SysSssTableDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysSssTableService {
  apiName = 'Default';
  

  create = (input: SysSssTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysSssTableDto>({
      method: 'POST',
      url: '/api/app/sys-sss-table',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-sss-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysSssTableDto>({
      method: 'GET',
      url: `/api/app/sys-sss-table/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysSssTableDto>>({
      method: 'GET',
      url: '/api/app/sys-sss-table',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysSssTableCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysSssTableDto>({
      method: 'PUT',
      url: `/api/app/sys-sss-table/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
