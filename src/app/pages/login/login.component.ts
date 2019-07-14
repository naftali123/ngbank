import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AccountsService} from 'src/app/services/accounts.service'

import { BankUser } from 'src/app/model/bank-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string
  password: string
  
  constructor(private db:AccountsService, private router:Router) { 
    console.log(123)
  }

  ngOnInit() {
  }

  loginButton(userName:string,password:string):void{
    console.log(userName,password);
    let bu:BankUser = this.db.loginToAccount(userName, password)
    if(bu)this.router.navigateByUrl('summary/' + bu.id)
    else console.log('Invalid user name or password')
  }
}
