import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SalonService } from '../../interfaces/salon.interface';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SelectedAddonsPipe } from '../../pipes/selected-addons.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { TotalPipe } from '../../pipes/total.pipe';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    SelectedAddonsPipe,
    MatButtonModule,
    TotalPipe,
  ],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingFormComponent {
  public bookingForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9]{6,}'),
    ]),
  });
  public serviceDetails: { currency: string; service: SalonService };
  readonly dialog = inject(MatDialog);

  constructor(private router: Router) {
    this.serviceDetails = this.router.getCurrentNavigation()?.extras.state as {
      currency: string;
      service: SalonService;
    };
  }

  public onSubmitForm(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    console.log('Contact Details: ', this.bookingForm.value);
    console.log('Service Details: ', this.serviceDetails.service);

    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      data: { message: 'Your request has been successfully submitted.' },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
