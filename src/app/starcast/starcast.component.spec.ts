import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcastComponent } from './starcast.component';

describe('StarcastComponent', () => {
  let component: StarcastComponent;
  let fixture: ComponentFixture<StarcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
