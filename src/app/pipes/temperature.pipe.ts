import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unite: 'c' | 'f'): string | number {
    if (unite === 'c') {
      return `${(value - 32) * 5/9} °C`;
    }
    if (unite === 'f') {
      return `${(value * 9/5) + 32} °F`;
    }
    return value;
  }

}
