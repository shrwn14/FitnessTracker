import type { PayrollMultiplierHeadCreateUpdateDto, PayrollMultiplierHeadDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollMultiplierHeadService {
  apiName = 'Default';
  

  create = (input: PayrollMultiplierHeadCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollMultiplierHeadDto>({
      method: 'POST',
      url: '/api/app/payroll-multiplier-head',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payroll-multiplier-head/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollMultiplierHeadDto>({
      method: 'GET',
      url: `/api/app/payroll-multiplier-head/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PayrollMultiplierHeadDto>>({
      method: 'GET',
      url: '/api/app/payroll-multiplier-head',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  hydrate = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollMultiplierHeadDto>({
      method: 'POST',
      url: `/api/app/payroll-multiplier-head/${id}/hydrate`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: PayrollMultiplierHeadCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollMultiplierHeadDto>({
      method: 'PUT',
      url: `/api/app/payroll-multiplier-head/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
