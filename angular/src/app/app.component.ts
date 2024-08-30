import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic'; 
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {

  constructor(
    private replaceableComponents: ReplaceableComponentsService, // injected the service
  ) {
    this.replaceableComponents.add({
      component: MainLayoutComponent,
      key: eThemeBasicComponents.ApplicationLayout,
    });
  }

}
