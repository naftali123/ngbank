import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ActionComponent } from './pages/action/action.component';
import { RegisterComponent } from './pages/register/register.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ActionsSummaryComponent } from './pages/actions-summary/actions-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActionComponent,
    RegisterComponent,
    SummaryComponent,
    ActionsSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
