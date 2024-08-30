import { inject, Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe, DatePipe, PercentPipe } from '@angular/common';
import { constants } from './../../environments/environment';

@Pipe({
  name: 'formatterPipe',
  standalone: true,
  pure: false
})
export class FormatterPipe implements PipeTransform {

  decimalPipe = inject(DecimalPipe);
  datePipe = inject(DatePipe);
  percentPipe = inject(PercentPipe);

  transform(value: any, dataType: 'number' | 'date' | 'datetime' | 'percent' ): any {

    if (value.length < 1 || value == null) {
      return '';
    }

     if (dataType == 'number') {
      const _value = this.decimalPipe.transform(+value, '1.2-2');

        if (+_value.replaceAll(',','') == 0) {
          return '-';
        }

        if (+_value.replaceAll(',','') < 0) {
          return `(${_value.replace('-', '')})`;
        }

        return _value;
     }

     if (dataType == 'date') {
      return this.datePipe.transform(value, constants.DATE_FORMAT);
     }

     if (dataType == 'datetime') {
      return this.datePipe.transform(value, constants.DATETIME_FORMAT);
     }

     if (dataType == 'percent') {
      return this.percentPipe.transform(value);
     }

     return value;
  }

}
