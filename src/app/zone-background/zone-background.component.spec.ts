import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneBackgroundComponent } from './zone-background.component';

describe('ZoneBackgroundComponent', () => {
  let component: ZoneBackgroundComponent;
  let fixture: ComponentFixture<ZoneBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
