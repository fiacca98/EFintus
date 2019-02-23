import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComponentComponent } from './wish-list-component.component';

describe('WishListComponentComponent', () => {
  let component: WishListComponentComponent;
  let fixture: ComponentFixture<WishListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
