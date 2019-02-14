import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdottiComponentComponent } from './lista-prodotti-component.component';

describe('ListaProdottiComponentComponent', () => {
  let component: ListaProdottiComponentComponent;
  let fixture: ComponentFixture<ListaProdottiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdottiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdottiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
