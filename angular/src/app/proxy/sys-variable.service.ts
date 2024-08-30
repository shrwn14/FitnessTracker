import type { SysVariableDto, SysVariableUpdateDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysVariableService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysVariableDto>({
      method: 'GET',
      url: `/api/app/sys-variable/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysVariableDto>>({
      method: 'GET',
      url: '/api/app/sys-variable',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysVariableUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysVariableDto>({
      method: 'PUT',
      url: `/api/app/sys-variable/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
