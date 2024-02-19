import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersSmallComponent } from './counters-small.component';

describe('CountersSmallComponent', () => {
  let component: CountersSmallComponent;
  let fixture: ComponentFixture<CountersSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountersSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
