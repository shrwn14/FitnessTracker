import type { DropDownPagedAndSortedResultRequestDto, SysDropDownCreateUpdateDto, SysDropDownDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysDropDownService {
  apiName = 'Default';
  

  create = (input: SysDropDownCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysDropDownDto>({
      method: 'POST',
      url: '/api/app/sys-drop-down',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-drop-down/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysDropDownDto>({
      method: 'GET',
      url: `/api/app/sys-drop-down/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: DropDownPagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysDropDownDto>>({
      method: 'GET',
      url: '/api/app/sys-drop-down',
      params: { dropDownTypeId: input.dropDownTypeId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysDropDownCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysDropDownDto>({
      method: 'PUT',
      url: `/api/app/sys-drop-down/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
