import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  results: [] = []
  formGroup!:FormGroup

  constructor(private formBuild:FormBuilder, private service:UnitsService) {}

  ngOnInit() {
    this.buildForm()
    this.getUnits()
  }

  buildForm() {
    this.formGroup = this.formBuild.group({
      hour: '',
      showClosed: false
    })
  }

  getUnits() {
    this.service.getUnits().subscribe(
      (data) => console.log(data)
    )
  }

  onSubmit() {
    console.log(this.formGroup.value)
  }

  onClean() {
    this.formGroup.reset()
  }

}
