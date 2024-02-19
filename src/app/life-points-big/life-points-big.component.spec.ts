import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePointsBigComponent } from './life-points-big.component';

describe('LifePointsBigComponent', () => {
  let component: LifePointsBigComponent;
  let fixture: ComponentFixture<LifePointsBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifePointsBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifePointsBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
