import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGetByIdComponent } from './schedule-get-by-id.component';

describe('ScheduleGetByIdComponent', () => {
  let component: ScheduleGetByIdComponent;
  let fixture: ComponentFixture<ScheduleGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGetByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
