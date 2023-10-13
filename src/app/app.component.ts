import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/locations.interface';
import { UnitsService } from './services/units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showList = new BehaviorSubject(false)
  unitsList: Location[] = []

  constructor(private unitsServive: UnitsService) {}

  onSubmit() {
    this.unitsList = this.unitsServive.getFilteredUnits()
    this.showList.next(true)
  }
}
