import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdrappointmentComponent } from './bookdrappointment.component';

describe('BookdrappointmentComponent', () => {
  let component: BookdrappointmentComponent;
  let fixture: ComponentFixture<BookdrappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdrappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdrappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
