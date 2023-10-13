import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';
import { UnitsService } from 'src/app/services/units.service';
import { Location } from 'src/app/types/locations.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() submitEvent = new EventEmitter()
  results: Location[] = []
  filteredReults: Location[] = []
  formGroup!:FormGroup

  constructor(
    private formBuild:FormBuilder, 
    private service:UnitsService, 
    private filterService: FilterUnitsService
  ) {}

  ngOnInit() {
    this.buildForm()
    this.getUnits()
  }

  buildForm() {
    this.formGroup = this.formBuild.group({
      hour: '',
      showClosed: true
    })
  }

  getUnits() {
    this.service.getUnits().subscribe(
      (data) => {
        this.results = data
        this.filteredReults = data
      }
    )
  }

  onSubmit() {
    let {showClosed, hour} = this.formGroup.value
    this.filteredReults = this.filterService.filter(this.results, showClosed, hour)
    this.service.setFilteredUnits(this.filteredReults)

    this.submitEvent.emit()
  }

  onClean() {
    this.formGroup.reset()
  }

}
