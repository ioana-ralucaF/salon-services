import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalonService } from '../../interfaces/salon.interface';
import { ServiceListItemComponent } from '../service-list-item/service-list-item.component';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [ServiceListItemComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetailsComponent {
  public serviceDetails: { currency: string; service: SalonService };

  constructor(private router: Router) {
    this.serviceDetails = this.router.getCurrentNavigation()?.extras.state as {
      currency: string;
      service: SalonService;
    };
  }
}
