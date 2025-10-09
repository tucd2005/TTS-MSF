import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongBaoThanhCong } from './thong-bao-thanh-cong';

describe('ThongBaoThanhCong', () => {
  let component: ThongBaoThanhCong;
  let fixture: ComponentFixture<ThongBaoThanhCong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThongBaoThanhCong]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongBaoThanhCong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
