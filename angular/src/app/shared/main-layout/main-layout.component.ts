import { Component, HostListener, OnInit, inject } from '@angular/core';
import { IBreadcrumb, IRouteData } from '../../models/iroutedata';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet, Router, RoutesRecognized, ActivationStart } from '@angular/router';
import { NgbAccordionModule, NgbDropdownModule  } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, CoreModule, ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    NgbAccordionModule,
    CoreModule,
    AbpOAuthModule,
    SettingManagementConfigModule,
    NgbDropdownModule 
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  title = 'PayrollCenter';
  breadcrumbs: IBreadcrumb[];

  showBackToTopButton = false;
  activatedRoute = inject(ActivatedRoute); 
  router = inject(Router);
  authService = inject(AuthService);
  config = inject(ConfigStateService);

  currentUser: CurrentUserDto;

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated) {
        this.authService.navigateToLogin();
        return;
    } 
    else {
      this.config.getOne$('currentUser').subscribe( user  => {
        this.currentUser = user;
      });
    }

    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        const d = <IRouteData>data.snapshot.data;
        this.title = d.title;
        this.breadcrumbs = d.breadcrumbs;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTopButton = window.scrollY > 100; 
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  logOut(): void {
      this.authService.logout().subscribe(res => console.log(res));
  }

  toggleSideBar(): void {
    const body = document.querySelector('body');
    body.classList.toggle('toggle-sidebar');
  }
}


