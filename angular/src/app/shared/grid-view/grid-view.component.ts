import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbPaginationModule, NgbTypeaheadModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IDataSourceColumn } from './../../models/index';
import { GridViewSortDirective } from './../../directives/grid-view-sort.directive';
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [CommonModule, 
            FormsModule, 
            RouterLink, 
            NgbPaginationModule, 
            NgbTypeaheadModule, 
            NgbTooltipModule,
            GridViewSortDirective],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.scss'
})
export class GridViewComponent {
  @Input() key: string;
  @Input() columns: IDataSourceColumn[];
  @Input() dataSource: any[];

  @Input() editRoute  = '';
  @Input() deleteRoute = '';

  @Input() tableHasStripe = true;
  @Input() tableHasBorder = true;
  @Input() tableIsSmall = true;

  @Input() page = 1;
  @Input() pageSize = 100;
  @Input() collectionSize: number;

  @ViewChildren(GridViewSortDirective) headers: QueryList<GridViewSortDirective>;
  @Output() eventHandler = new EventEmitter<any>();
  @Output() editHandler = new EventEmitter<any>();
  @Output() deleteHandler = new EventEmitter<any>();


  @Input() filter: any;

  onPageChange(): void {
    this.page = 1;
    this.filter.skipCount = (this.page - 1) * this.pageSize;
    this.filter.maxResultCount = this.pageSize;

    this.eventHandler.emit(this.filter);
  }

  onEditHandlerClicked(data: any): void {
    this.editHandler.emit(data);
  }

  onDeleteHandlerClicked(data: any): void {
    this.deleteHandler.emit(data);
  }

  onSort(event: PagedAndSortedResultRequestDto) {
		// resetting other headers
		for (const header of this.headers) {
			if (header.sortable != event.sorting.replace('asc', '').replace('desc', '').trim()) {
				header.direction = '';
			}
		}

    event.skipCount = (this.page - 1) * this.pageSize;
    event.maxResultCount = this.pageSize;

    this.filter = event;

		this.eventHandler.emit(this.filter);
	}

  calculateTotalPages(): number {
      if (this.pageSize == 0)
        return 0;
      
      return Math.ceil(this.collectionSize / this.pageSize);
  }
}
