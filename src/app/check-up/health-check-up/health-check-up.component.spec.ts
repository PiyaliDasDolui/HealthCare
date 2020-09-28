import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckUpComponent } from './health-check-up.component';

describe('HealthCheckUpComponent', () => {
  let component: HealthCheckUpComponent;
  let fixture: ComponentFixture<HealthCheckUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCheckUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
