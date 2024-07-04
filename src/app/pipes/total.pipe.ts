import { Pipe, PipeTransform } from '@angular/core';
import { SalonService, ServiceAddon } from '../interfaces/salon.interface';

@Pipe({
  name: 'total',
  standalone: true,
})
export class TotalPipe implements PipeTransform {
  transform(item: SalonService, prop: 'price' | 'duration'): number {
    if (!item || !prop) {
      return 0;
    }
    let total: number = item[prop];

    if (!item.addons?.length) {
      return total;
    }

    item.addons.forEach((addon: ServiceAddon) => {
      if (addon.selected) {
        total += addon[prop];
      }
    });

    return total;
  }
}
