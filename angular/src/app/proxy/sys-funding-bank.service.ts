import type { BankCodeDto, SysFundingBankCreateUpdateDto, SysFundingBankDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SysFundingBankService {
  apiName = 'Default';
  

  create = (input: SysFundingBankCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysFundingBankDto>({
      method: 'POST',
      url: '/api/app/sys-funding-bank',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sys-funding-bank/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysFundingBankDto>({
      method: 'GET',
      url: `/api/app/sys-funding-bank/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getBankCodes = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, BankCodeDto[]>({
      method: 'GET',
      url: '/api/app/sys-funding-bank/bank-codes',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SysFundingBankDto>>({
      method: 'GET',
      url: '/api/app/sys-funding-bank',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SysFundingBankCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SysFundingBankDto>({
      method: 'PUT',
      url: `/api/app/sys-funding-bank/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
