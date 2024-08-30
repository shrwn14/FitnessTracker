import type { EmployeeContactCreateUpdateDto, EmployeeContactDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeContactService {
  apiName = 'Default';
  

  create = (input: EmployeeContactCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeContactDto>({
      method: 'POST',
      url: '/api/app/employee-contact',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeContactDto>({
      method: 'GET',
      url: `/api/app/employee-contact/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeContactCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeContactDto>({
      method: 'PUT',
      url: `/api/app/employee-contact/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
