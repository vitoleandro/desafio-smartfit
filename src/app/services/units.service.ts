import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';
import { Location } from '../types/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  readonly baseURL:string = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([])
  private allUnits$:Observable<Location[]> = this.allUnitsSubject.asObservable()
  private filteredUnits:Location[] = []

  constructor(private http: HttpClient) {
    this.http.get<UnitsResponse>(this.baseURL).subscribe(
      (data) => {
        this.allUnitsSubject.next(data.locations)
        this.filteredUnits = data.locations
      }
    )
  }

  getUnits():Observable<Location[]> {
    return this.allUnits$
  }

  getFilteredUnits() {
    return this.filteredUnits
  }

  setFilteredUnits(value:Location[]) {
    this.filteredUnits = value
  }
}
