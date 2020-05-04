import { Routes } from '@angular/router';

import { StarcastComponent } from '../starcast/starcast.component';
import { EpisodesComponent } from '../episodes/episodes.component';
import { CompleteInfoComponent } from '../complete-info/complete-info.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ReviewComponent } from '../review/review.component';


export const APPLICATION_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'episodes', component: EpisodesComponent },
    { path: 'detail/:id', component: CompleteInfoComponent },
    { path: 'cast', component: StarcastComponent },
    { path: 'about', component: AboutComponent },
    { path: 'review', component: ReviewComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }

];