import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import{BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import{RouterTestingModule} from  '@angular/router/testing';
import{FlexLayoutModule} from  '@angular/flex-layout';
import{Episode} from  '../../shared/episode';
import{EpisodeService} from  '../../services/episode.service';
import {dummy_data_episodes}  from '../../shared/dummy-data/episodes';
import {BASE_URL} from '../../shared/baseurl';
import{Observable, of} from 'rxjs';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatProgressBar} from '@angular/material/progress-bar';
import{By} from '@angular/platform-browser';
import{DebugElement} from '@angular/core';

import { EpisodesComponent } from './episodes.component';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;

  beforeEach(async(() => {
    
    const episodeServiceStub = {
      getEpisodes: function(): Observable<Episode[]>{
        return of(dummy_data_episodes);
      }


    };

    TestBed.configureTestingModule({
      imports:[
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([{path:'episode', component:EpisodesComponent}]),
        FlexLayoutModule,
        MatGridListModule,
        MatProgressBar,
        MatProgressSpinnerModule,
      ],
      declarations: [ EpisodesComponent ],
      providers:[
        {provide: EpisodeService, useValue: episodeServiceStub },
        {provide: 'baseUrl', useValue: BASE_URL },
      ]
    })
    .compileComponents();
    const episodeService = TestBed.get(EpisodeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('episodes itme should be 3', ()=>{
    expect(component.episodes.length).toBe(3);
    expect(component.episodes[1]._id).toBe('58f56189ee9d4bd5e610d6db');
    expect(component.episodes[1].name).toBe('The One Where It All Began');
  });
  it('shoudl use episodes int he templat', ()=>{
    fixture.detectChanges();
    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toContain(dummy_data_episodes[0].name.toUpperCase());
  });
});
