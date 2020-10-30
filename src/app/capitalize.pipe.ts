import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstChar=value.substring(0,1)
    let allotherChar=value.substring(1,value.length)

    let newValue = firstChar.toUpperCase() + allotherChar.toLocaleLowerCase()

    return newValue
  }

}
