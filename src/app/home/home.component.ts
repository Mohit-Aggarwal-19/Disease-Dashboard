import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  Title:string="Disease Dashboard";
  loginForm!:FormGroup;
  fontSizePx = 16;

  constructor(private formBuilder:FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName: [null,[Validators.required]],
      password: [null,[Validators.required]],
    })
  }

  onLogin(){}

  onRegister(){
    this.router.navigate(['register'])
  }

}
