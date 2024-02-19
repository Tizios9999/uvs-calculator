import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusAtkBtnGroupComponent } from './plus-minus-atk-btn-group.component';

describe('PlusMinusAtkBtnGroupComponent', () => {
  let component: PlusMinusAtkBtnGroupComponent;
  let fixture: ComponentFixture<PlusMinusAtkBtnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusMinusAtkBtnGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlusMinusAtkBtnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
