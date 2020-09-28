import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProblemComponent } from './health-problem.component';

describe('HealthProblemComponent', () => {
  let component: HealthProblemComponent;
  let fixture: ComponentFixture<HealthProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
