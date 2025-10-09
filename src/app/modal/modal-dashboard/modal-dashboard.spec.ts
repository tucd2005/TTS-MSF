import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDashboard } from './modal-dashboard';

describe('ModalDashboard', () => {
  let component: ModalDashboard;
  let fixture: ComponentFixture<ModalDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
