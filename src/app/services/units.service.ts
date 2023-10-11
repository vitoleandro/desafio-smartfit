import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  readonly baseURL: string = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
  constructor(private http: HttpClient) {}

  getUnits():Observable<UnitsResponse> {
    return this.http.get<UnitsResponse>(this.baseURL)
  }
}
