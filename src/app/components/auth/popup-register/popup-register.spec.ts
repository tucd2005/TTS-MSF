import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRegister } from './popup-register';

describe('PopupRegister', () => {
  let component: PopupRegister;
  let fixture: ComponentFixture<PopupRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
