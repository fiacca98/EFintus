import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazziniComponent } from './magazzini.component';

describe('MagazziniComponent', () => {
  let component: MagazziniComponent;
  let fixture: ComponentFixture<MagazziniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazziniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazziniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
