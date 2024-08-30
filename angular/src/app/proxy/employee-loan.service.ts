import type { EmployeeLoanCreateUpdateDto, EmployeeLoanDto, EmployeeLoanPagedAndSortedResultRequestDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLoanService {
  apiName = 'Default';
  

  create = (input: EmployeeLoanCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeLoanDto>({
      method: 'POST',
      url: '/api/app/employee-loan',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/employee-loan/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeLoanDto>({
      method: 'GET',
      url: `/api/app/employee-loan/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: EmployeeLoanPagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EmployeeLoanDto>>({
      method: 'GET',
      url: '/api/app/employee-loan',
      params: { employeeId: input.employeeId, loanNo: input.loanNo, loanSources: input.loanSources, isActive: input.isActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeLoanCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeLoanDto>({
      method: 'PUT',
      url: `/api/app/employee-loan/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
