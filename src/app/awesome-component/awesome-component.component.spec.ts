import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeComponentComponent } from './awesome-component.component';

describe('AwesomeComponentComponent', () => {
  let component: AwesomeComponentComponent;
  let fixture: ComponentFixture<AwesomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwesomeComponentComponent]
    });
    fixture = TestBed.createComponent(AwesomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
