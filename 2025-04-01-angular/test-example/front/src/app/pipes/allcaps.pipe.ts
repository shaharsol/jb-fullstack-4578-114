import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allcaps'
})
export class AllcapsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value as string).toUpperCase();
  }

}
