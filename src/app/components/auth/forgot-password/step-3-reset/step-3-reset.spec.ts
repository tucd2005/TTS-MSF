import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Reset } from './step-3-reset';

describe('Step3Reset', () => {
  let component: Step3Reset;
  let fixture: ComponentFixture<Step3Reset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3Reset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3Reset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
