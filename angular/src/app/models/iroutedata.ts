export interface IRouteData {
    title: string,
    breadcrumbs: IBreadcrumb[]
}

export interface IBreadcrumb {
    label: string,
    routerLink: string,
    isActive?: boolean
}
