import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  id:string = '';
  pwd:string = '';

  constructor() {}

  ngOnInit(): void {}
  loginFunc1() {
    console.log('id->', this.id);
    console.log('pwd->', this.pwd);
  }
}
