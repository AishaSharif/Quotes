import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let difference = Math.abs(today.getDate() - value);
    const secondsInDay = 84600;
    var dateDifferenceSeconds = difference * .001;
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1){
      return dateCounter;
    } else{
      return 0;
    }
  }

}
