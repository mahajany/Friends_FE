import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule, MatSelect} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import 'hammerjs';
import { StarcastComponent } from './starcast/starcast.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShortInfoComponent } from './short-info/short-info.component';

import { EpisodeService } from '../services/episode.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import {ProcessHttpMessageService} from '../services/process-http-message.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReviewService } from '../services/review.service';
import { CompleteInfoComponent } from './complete-info/complete-info.component';
import { LoginComponent } from './login/login.component';
import {BASE_URL, URL_FRIENDS} from '../shared/baseurl';
import { HilightDirective } from './directives/hilight.directive';


@NgModule({
  declarations: [
    AppComponent,
    StarcastComponent,
    EpisodesComponent,
    HeaderComponent,
    FooterComponent,
    ShortInfoComponent,
    HomeComponent,
    AboutComponent,
    ReviewComponent,
    CompleteInfoComponent,
    LoginComponent,
    HilightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    , BrowserAnimationsModule
    , MatToolbarModule
    , FlexLayoutModule
    , MatListModule
    , MatGridListModule
    , MatCardModule
    , MatButtonModule
    , MatDialogModule
    , MatFormFieldModule
    , MatInputModule
    , MatCheckboxModule
    , FormsModule
    , ReactiveFormsModule
    , MatSelectModule
    , MatSlideToggleModule
    , MatProgressBarModule
    , HttpClientModule
    
  ],
  providers: [
    EpisodeService,
    ReviewService,
    ProcessHttpMessageService,
    {provide: 'BASE_URL', useValue: BASE_URL}
    , {provide: 'URL_FRIENDS', useValue: URL_FRIENDS}
  ],
  entryComponents: [
    LoginComponent
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

