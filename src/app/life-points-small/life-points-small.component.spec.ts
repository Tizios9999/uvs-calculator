import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePointsSmallComponent } from './life-points-small.component';

describe('LifePointsSmallComponent', () => {
  let component: LifePointsSmallComponent;
  let fixture: ComponentFixture<LifePointsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifePointsSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifePointsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
