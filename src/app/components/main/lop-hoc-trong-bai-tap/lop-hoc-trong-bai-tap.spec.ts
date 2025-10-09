import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopHocTrongBaiTap } from './lop-hoc-trong-bai-tap';

describe('LopHocTrongBaiTap', () => {
  let component: LopHocTrongBaiTap;
  let fixture: ComponentFixture<LopHocTrongBaiTap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LopHocTrongBaiTap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LopHocTrongBaiTap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
