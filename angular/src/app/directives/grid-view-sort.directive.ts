import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { Directive, EventEmitter, Input, Output } from '@angular/core';


@Directive({
  selector: 'th[sortable]',
  standalone: true,
  host: {
		'[class.asc]': 'direction == "asc"',
		'[class.desc]': 'direction == "desc"',
		'(click)': 'rotate()',
	},
})
export class GridViewSortDirective {
  @Input() sortable: string = '';
	@Input() direction: string = '';
	@Output() sort = new EventEmitter<PagedAndSortedResultRequestDto>();
  
  constructor() { }

  rotate(): void {
    let currentDirection = '';
    if (this.direction == '') {
      currentDirection = 'asc';
    }
    if (this.direction == 'asc') {
      currentDirection = 'desc';
    }
    if (this.direction == 'desc') {
      currentDirection = '';
    }
    
    this.direction = currentDirection;
    const sorting = this.direction == '' ? '' : `${this.sortable} ${this.direction}`;
    this.sort.emit({ sorting: sorting } as PagedAndSortedResultRequestDto);
  }

}
