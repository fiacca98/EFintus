import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SottoCategorieComponentComponent } from './sotto-categorie-component.component';

describe('SottoCategorieComponentComponent', () => {
  let component: SottoCategorieComponentComponent;
  let fixture: ComponentFixture<SottoCategorieComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SottoCategorieComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SottoCategorieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
