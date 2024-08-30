import type { EmployeeAllowanceCreateUpdateDto, EmployeeAllowanceDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeAllowanceService {
  apiName = 'Default';
  

  create = (input: EmployeeAllowanceCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeAllowanceDto>({
      method: 'POST',
      url: '/api/app/employee-allowance',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getList = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeAllowanceDto[]>({
      method: 'GET',
      url: `/api/app/employee-allowance/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeAllowanceCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeAllowanceDto>({
      method: 'PUT',
      url: `/api/app/employee-allowance/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
