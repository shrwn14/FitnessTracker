import type { SysCompanyCreateUpdateDto, SysCompanyDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysCompanyService {
  apiName = 'Default';
  

  create = (input: SysCompanyCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCompanyDto>({
      method: 'POST',
      url: '/api/app/sys-company',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCompanyDto>({
      method: 'GET',
      url: '/api/app/sys-company',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysCompanyCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysCompanyDto>({
      method: 'PUT',
      url: `/api/app/sys-company/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
