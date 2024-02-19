import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackPhaseComponent } from './attack-phase.component';

describe('AttackPhaseComponent', () => {
  let component: AttackPhaseComponent;
  let fixture: ComponentFixture<AttackPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackPhaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttackPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
