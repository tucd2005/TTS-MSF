import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClass } from './list-class';

describe('ListClass', () => {
  let component: ListClass;
  let fixture: ComponentFixture<ListClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
