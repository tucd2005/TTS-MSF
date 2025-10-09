import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightExercise } from './right-exercise';

describe('RightExercise', () => {
  let component: RightExercise;
  let fixture: ComponentFixture<RightExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightExercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightExercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
