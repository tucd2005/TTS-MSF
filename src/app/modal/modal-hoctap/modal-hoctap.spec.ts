import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHoctap } from './modal-hoctap';

describe('ModalHoctap', () => {
  let component: ModalHoctap;
  let fixture: ComponentFixture<ModalHoctap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalHoctap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHoctap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
