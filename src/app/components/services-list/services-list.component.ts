import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SalonInfoService } from '../../services/salon-info.service';
import { SalonDTO } from '../../interfaces/salon.interface';
import { CommonModule } from '@angular/common';
import { ServiceListItemComponent } from '../service-list-item/service-list-item.component';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, ServiceListItemComponent],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListComponent {
  public salonInfo$: Observable<SalonDTO> =
    this.salonInfoService.getSalonInfoFromJSON();

  constructor(private salonInfoService: SalonInfoService) {}
}
