import { Component, OnInit } from '@angular/core';
import { UserI } from '../../../shared/models/user.interface';
import { AuthService } from '../../../shared/services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required)  
  });

  constructor(private authSvc: AuthService, private route: Router) { }

  ngOnInit() {
    /* const user: UserI = {
      email: "mail@mail.com",
      password: "123456"
    }
    this.authSvc.loginByEmail(user); */
  }

  onLogin(form: UserI) {
    //console.log('Form', form);
    this.authSvc.loginByEmail(form)
    .then(res => {
      console.log("Successfully", res);
      this.route.navigate(['/']);
    })
    .catch(err => console.log("Error", err));
  }

};

