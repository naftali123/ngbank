import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/model/account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  _BankUserId:number
  accounts:Account[] = []
  constructor(private route:ActivatedRoute, parivate db:AccountsService) { }

  ngOnInit() {
    this.route.params.subscribe(myparams => {
      this._BankUserId = myparams['bankUserId']
      this.accounts = this.db.getAccountsById(this._BankUserId)
    })
  }

}
