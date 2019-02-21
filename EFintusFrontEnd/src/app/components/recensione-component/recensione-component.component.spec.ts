import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneComponentComponent } from './recensione-component.component';

describe('RecensioneComponentComponent', () => {
  let component: RecensioneComponentComponent;
  let fixture: ComponentFixture<RecensioneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecensioneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensioneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
