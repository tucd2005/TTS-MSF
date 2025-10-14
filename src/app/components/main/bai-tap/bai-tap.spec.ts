import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap } from './bai-tap';

describe('BaiTap', () => {
  let component: BaiTap;
  let fixture: ComponentFixture<BaiTap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaiTap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiTap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
