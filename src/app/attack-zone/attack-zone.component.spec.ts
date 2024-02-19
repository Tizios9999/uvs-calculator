import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackZoneComponent } from './attack-zone.component';

describe('AttackZoneComponent', () => {
  let component: AttackZoneComponent;
  let fixture: ComponentFixture<AttackZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttackZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
