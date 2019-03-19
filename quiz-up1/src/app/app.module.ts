import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
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
import { QuizComponent } from './quiz/quiz.component';
import { ChoosedTestPageComponent } from './choosed-test-page/choosed-test-page.component';

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
    AccountComponent,
    QuizComponent,
    ChoosedTestPageComponent
  ],
  imports: [
    BrowserModule,
    // HttpClient,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
