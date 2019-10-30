import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private frombuilder:FormBuilder) { }


  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']


  get cityName() {
    return this.registrationForm.get('cityName');
  }
  
  registrationForm = this.frombuilder.group({
   
  })


  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  
  isSubmitted=false;
  
  ngOnInit() {
    this.registrationForm=this.frombuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      cityName: ['', [Validators.required]]
    });

  }
  get formControls() { return this.registrationForm.controls; }
  book(){

  }

}
