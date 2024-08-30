import type { PayrollAccountCreateUpdateDto, PayrollAccountDto, PayrollAccountPagedAndSortedResultRequestDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollAccountService {
  apiName = 'Default';
  

  create = (input: PayrollAccountCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollAccountDto>({
      method: 'POST',
      url: '/api/app/payroll-account',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payroll-account/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollAccountDto>({
      method: 'GET',
      url: `/api/app/payroll-account/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PayrollAccountPagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PayrollAccountDto>>({
      method: 'GET',
      url: '/api/app/payroll-account',
      params: { payrollAccountCategories: input.payrollAccountCategories, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: PayrollAccountCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollAccountDto>({
      method: 'PUT',
      url: `/api/app/payroll-account/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
