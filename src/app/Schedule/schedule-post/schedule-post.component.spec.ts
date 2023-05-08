import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePostComponent } from './schedule-post.component';

describe('SchedulePostComponent', () => {
  let component: SchedulePostComponent;
  let fixture: ComponentFixture<SchedulePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
