import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar'
})
export class ConcatenarPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(args)
    if (args [0]){
      
    }
    return value+" Guitar Shop";
  }

}
