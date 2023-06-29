import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicatesPipe'
})
export class RemoveDuplicatesPipe implements PipeTransform {

 transform(value: any[], properties: string[]): any[] {
    if (!value || value.length === 0) {
      return value;
    }
    return value.filter((item, index) => {
      const currentIndex = value.findIndex((el) => {
        // Check all specified properties for duplicate comparison
        return properties.every((prop) => el[prop] === item[prop]);
      });
      return currentIndex === index;
    });
  }

}

