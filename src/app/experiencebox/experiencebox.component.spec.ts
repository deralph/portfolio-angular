import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceboxComponent } from './experiencebox.component';

describe('ExperienceboxComponent', () => {
  let component: ExperienceboxComponent;
  let fixture: ComponentFixture<ExperienceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
