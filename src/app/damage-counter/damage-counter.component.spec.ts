import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageCounterComponent } from './damage-counter.component';

describe('DamageCounterComponent', () => {
  let component: DamageCounterComponent;
  let fixture: ComponentFixture<DamageCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DamageCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DamageCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
