import type { PayrollDetailHeadDto, PayrollDetailManualEntryDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollDetailService {
  apiName = 'Default';
  

  create = (input: PayrollDetailHeadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollDetailHeadDto>({
      method: 'POST',
      url: '/api/app/payroll-detail',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createManyWithoutAttendance = (id: string, EmployeeIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollDetailHeadDto[]>({
      method: 'POST',
      url: `/api/app/payroll-detail/${id}/many-without-attendance`,
      body: EmployeeIds,
    },
    { apiName: this.apiName,...config });
  

  createSingleWithoutAttendance = (input: PayrollDetailManualEntryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollDetailHeadDto>({
      method: 'POST',
      url: '/api/app/payroll-detail/single-without-attendance',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/payroll-detail/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (id: string, input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollDetailHeadDto[]>({
      method: 'GET',
      url: `/api/app/payroll-detail/${id}`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: PayrollDetailHeadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PayrollDetailHeadDto>({
      method: 'PUT',
      url: `/api/app/payroll-detail/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
