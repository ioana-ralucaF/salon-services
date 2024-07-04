import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalonDTO } from '../interfaces/salon.interface';

@Injectable({
  providedIn: 'root',
})
export class SalonInfoService {
  constructor(private http: HttpClient) {}

  public getSalonInfoFromJSON(): Observable<SalonDTO> {
    return this.http.get<SalonDTO>('./services.json');
  }
}
