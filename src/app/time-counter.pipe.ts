import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {

  transform(value: any): any {
    let today:any = new Date();
    let difference = Math.abs(today - value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = difference * .001;
    var dateCounter = Math.round(dateDifferenceSeconds / secondsInDay);
    // dateCounter / 60;

    if (dateCounter >= 1){
      return dateCounter;
    } else{
      return 0;
    }
  }

}