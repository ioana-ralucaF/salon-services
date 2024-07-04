import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SalonService, ServiceAddon } from '../../interfaces/salon.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-service-list-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
  templateUrl: './service-list-item.component.html',
  styleUrl: './service-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceListItemComponent implements OnChanges {
  @Input() public service: SalonService;
  @Input() public currency: string;
  @Input() public isDetailsView: boolean = false;

  public totalPrice: number;
  public totalDuration: number;

  constructor(private router: Router) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['service']) {
      this.totalPrice = this.service.price;
      this.totalDuration = this.service.duration;
    }
  }

  public onButtonClicked(): void {
    if (this.isDetailsView) {
      this.router.navigateByUrl(`booking/${this.service.id}`, {
        state: { service: this.service, currency: this.currency },
      });
      return;
    }
    this.router.navigateByUrl(`service-details/${this.service.id}`, {
      state: { service: this.service, currency: this.currency },
    });
  }

  public toggleAddon(addon: ServiceAddon): void {
    addon.selected = !addon.selected;
    if (addon.selected) {
      this.totalDuration += addon.duration;
      this.totalPrice += addon.price;
      return;
    }

    this.totalDuration -= addon.duration;
    this.totalPrice -= addon.price;
  }
}
