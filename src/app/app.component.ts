import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SalonInfoService } from './services/salon-info.service';
import { Observable, map } from 'rxjs';
import { SalonDTO } from './interfaces/salon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public salonName$: Observable<string> = this.salonInfoService
    .getSalonInfoFromJSON()
    .pipe(map((salonInfo: SalonDTO) => salonInfo?.salon?.name));

  constructor(private salonInfoService: SalonInfoService) {}
}
