import { Pipe, PipeTransform } from '@angular/core';
import { ServiceAddon } from '../interfaces/salon.interface';

@Pipe({
  name: 'selectedAddons',
  standalone: true,
})
export class SelectedAddonsPipe implements PipeTransform {
  transform(items: ServiceAddon[]): ServiceAddon[] {
    if (!items || !items.length) {
      return items;
    }

    return items.filter((item: ServiceAddon) => item.selected);
  }
}
