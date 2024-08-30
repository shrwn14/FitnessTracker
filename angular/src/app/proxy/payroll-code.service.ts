import type { PayrollCodeCreateUpdateDto, PayrollCodeDto, PayrollCodePagedAndSortedResultRequestDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollCodeService {
  apiName = 'Default';
  

  create = (input: PayrollCodeCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollCodeDto>({
      method: 'POST',
      url: '/api/app/payroll-code',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payroll-code/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollCodeDto>({
      method: 'GET',
      url: `/api/app/payroll-code/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PayrollCodePagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PayrollCodeDto>>({
      method: 'GET',
      url: '/api/app/payroll-code',
      params: { year: input.year, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getNew = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollCodeDto>({
      method: 'GET',
      url: '/api/app/payroll-code/new',
    },
    { apiName: this.apiName,...config });
  

  getYears = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, number[]>({
      method: 'GET',
      url: '/api/app/payroll-code/years',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: PayrollCodeCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollCodeDto>({
      method: 'PUT',
      url: `/api/app/payroll-code/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
