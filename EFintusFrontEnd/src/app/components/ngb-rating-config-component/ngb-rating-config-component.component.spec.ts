import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbRatingConfigComponentComponent } from './ngb-rating-config-component.component';

describe('NgbRatingConfigComponentComponent', () => {
  let component: NgbRatingConfigComponentComponent;
  let fixture: ComponentFixture<NgbRatingConfigComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbRatingConfigComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbRatingConfigComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
