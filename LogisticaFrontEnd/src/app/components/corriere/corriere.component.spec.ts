import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorriereComponent } from './corriere.component';

describe('CorriereComponent', () => {
  let component: CorriereComponent;
  let fixture: ComponentFixture<CorriereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorriereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
