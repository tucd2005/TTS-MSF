import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1Email } from './step-1-email';

describe('Step1Email', () => {
  let component: Step1Email;
  let fixture: ComponentFixture<Step1Email>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1Email]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1Email);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
