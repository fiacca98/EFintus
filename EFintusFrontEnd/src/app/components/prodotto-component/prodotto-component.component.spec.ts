import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoComponentComponent } from './prodotto-component.component';

describe('ProdottoComponentComponent', () => {
  let component: ProdottoComponentComponent;
  let fixture: ComponentFixture<ProdottoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdottoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
