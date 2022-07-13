import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let seconds = value % 60;
    let minutes = Math.floor(value/60);
    let response = (minutes < 10 ? '0':'') + minutes + ' minutes ' + (seconds<10 ? '0': '') + seconds + ' secondes';
    return response;
    // return `${minutes < 10 ? '0':''}${minutes} minutes ${(seconds < 10 ? '0': '')} secondes`;
  }

}
