import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsectionComponent } from './ssection.component';

describe('SsectionComponent', () => {
  let component: SsectionComponent;
  let fixture: ComponentFixture<SsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
