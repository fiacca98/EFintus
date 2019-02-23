import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistoComponentComponent } from './acquisto-component.component';

describe('AcquistoComponentComponent', () => {
  let component: AcquistoComponentComponent;
  let fixture: ComponentFixture<AcquistoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquistoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquistoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
