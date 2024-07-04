import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { NotificationDialogData } from '../../interfaces/salon.interface';

@Component({
  selector: 'app-notification-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './notification-dialog.component.html',
  styleUrl: './notification-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<NotificationDialogComponent>);
  readonly data = inject<NotificationDialogData>(MAT_DIALOG_DATA);
}
