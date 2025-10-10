import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLophoc } from './modal-lophoc';

describe('ModalLophoc', () => {
  let component: ModalLophoc;
  let fixture: ComponentFixture<ModalLophoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLophoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLophoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
