import { Component, Input } from '@angular/core';
import { UnitsService } from 'src/app/services/units.service';
import { Location } from 'src/app/types/locations.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {

  @Input() unitsList: Location[] = []

  constructor(private unitService: UnitsService) {}

  ngOnInit() {}
}
