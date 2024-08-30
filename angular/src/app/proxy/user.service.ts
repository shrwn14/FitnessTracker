import type { UserDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiName = 'Default';
  

  getByUsernameOrEmail = (usernameOrEmail: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserDto>({
      method: 'GET',
      url: '/api/app/user/by-username-or-email',
      params: { usernameOrEmail },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
