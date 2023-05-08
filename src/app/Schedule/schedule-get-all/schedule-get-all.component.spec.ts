import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGetAllComponent } from './schedule-get-all.component';

describe('ScheduleGetAllComponent', () => {
  let component: ScheduleGetAllComponent;
  let fixture: ComponentFixture<ScheduleGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
