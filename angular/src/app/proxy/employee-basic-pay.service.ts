import type { EmployeeBasicPayCreateUpdateDto, EmployeeBasicPayDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeBasicPayService {
  apiName = 'Default';
  

  create = (input: EmployeeBasicPayCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeBasicPayDto>({
      method: 'POST',
      url: '/api/app/employee-basic-pay',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeBasicPayDto>({
      method: 'GET',
      url: `/api/app/employee-basic-pay/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeBasicPayCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeBasicPayDto>({
      method: 'PUT',
      url: `/api/app/employee-basic-pay/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
