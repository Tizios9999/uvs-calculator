import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersMainComponent } from './counters-main.component';

describe('CountersMainComponent', () => {
  let component: CountersMainComponent;
  let fixture: ComponentFixture<CountersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
