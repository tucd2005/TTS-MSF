import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinTaiKhoan } from './thong-tin-tai-khoan';

describe('ThongTinTaiKhoan', () => {
  let component: ThongTinTaiKhoan;
  let fixture: ComponentFixture<ThongTinTaiKhoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThongTinTaiKhoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongTinTaiKhoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
