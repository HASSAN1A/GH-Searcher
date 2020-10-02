import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {

    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference  = Math.abs(todayWithNoTime - value)
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateDifferenceMinutes = dateDifferenceSeconds/60;
    var dateDifferenceHours = dateDifferenceMinutes/60;
    var dateDifferenceDays = dateDifferenceHours/24;
    console.log(dateDifferenceDays);

    if(dateDifferenceDays > 0){
      let unit = 'day(s)';
      return (dateDifferenceDays+" "+unit);   
  }
  else{
    let unit = "days(s)"
    return (0 + " "+unit);
  }
}
}
