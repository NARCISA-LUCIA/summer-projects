import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HowIAmDoingComponent } from './how-i-am-doing/how-i-am-doing.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EducationComponent } from './education/education.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { PortofolioCardComponent } from './portofolio/portofolio-card/portofolio-card.component';
import { EducationCardComponent } from './education/education-card/education-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HowIAmDoingComponent,
    EducationComponent,
    PortofolioComponent,
    PortofolioCardComponent,
    EducationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressBarModule,
    MatStepperModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
