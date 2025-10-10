import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2Verify } from './step-2-verify';

describe('Step2Verify', () => {
  let component: Step2Verify;
  let fixture: ComponentFixture<Step2Verify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2Verify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2Verify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
