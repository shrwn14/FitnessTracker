import type { EmployeeGovContributionCreateUpdateDto, EmployeeGovContributionDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeGovContributionService {
  apiName = 'Default';
  

  create = (input: EmployeeGovContributionCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeGovContributionDto>({
      method: 'POST',
      url: '/api/app/employee-gov-contribution',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeGovContributionDto>({
      method: 'GET',
      url: `/api/app/employee-gov-contribution/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeGovContributionCreateUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeGovContributionDto>({
      method: 'PUT',
      url: `/api/app/employee-gov-contribution/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
