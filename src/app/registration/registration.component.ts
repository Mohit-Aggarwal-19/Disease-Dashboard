import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registrationForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private route:Router
  ){}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      name: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
    })
  }

  onBack(){
    this.route.navigate([''])
  }
}
