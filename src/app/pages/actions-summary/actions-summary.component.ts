import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountAction } from 'src/app/model/account-action';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.css']
})
export class ActionsSummaryComponent implements OnInit {
  _accountID:number
  accounts:AccountAction[] = []
  constructor(private route:ActivatedRoute, private db:AccountsService) { }

  ngOnInit() {
    this.route.params.subscribe(myparams => {
      this._accountID = myparams['bankAccoundId']
      this.accounts = this.db.getAccountActionByAccountId(this._accountID)
    })
  }
}
