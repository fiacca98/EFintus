import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoratoreComponent } from './lavoratore.component';

describe('LavoratoreComponent', () => {
  let component: LavoratoreComponent;
  let fixture: ComponentFixture<LavoratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavoratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
