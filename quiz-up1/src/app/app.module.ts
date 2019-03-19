import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AboutComponent } from './about/about.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    AboutComponent,
    TeamInfoComponent,
    MainComponent,
    PartnersComponent,
    CompaniesComponent,
    ProfileComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
