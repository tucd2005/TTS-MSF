import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopHocTrongLopHoc } from './lop-hoc-trong-lop-hoc';

describe('LopHocTrongLopHoc', () => {
  let component: LopHocTrongLopHoc;
  let fixture: ComponentFixture<LopHocTrongLopHoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LopHocTrongLopHoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LopHocTrongLopHoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
