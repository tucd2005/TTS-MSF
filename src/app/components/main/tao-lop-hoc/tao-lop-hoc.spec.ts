import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoLopHoc } from './tao-lop-hoc';

describe('TaoLopHoc', () => {
  let component: TaoLopHoc;
  let fixture: ComponentFixture<TaoLopHoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaoLopHoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaoLopHoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
