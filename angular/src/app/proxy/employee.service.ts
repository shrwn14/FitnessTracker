import type { EmployeeCreateDto, EmployeeDto, EmployeePagedAndSortedResultRequestDto, EmployeeUpdateDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiName = 'Default';
  

  create = (input: EmployeeCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeDto>({
      method: 'POST',
      url: '/api/app/employee',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeDto>({
      method: 'GET',
      url: `/api/app/employee/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: EmployeePagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EmployeeDto>>({
      method: 'GET',
      url: '/api/app/employee',
      params: { employeeNo: input.employeeNo, fullName: input.fullName, departmentIds: input.departmentIds, jobTitleIds: input.jobTitleIds, employeeStatusIds: input.employeeStatusIds, isActive: input.isActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeDto>({
      method: 'PUT',
      url: `/api/app/employee/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
