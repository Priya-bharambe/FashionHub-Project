import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsectionComponent } from './tsection.component';

describe('TsectionComponent', () => {
  let component: TsectionComponent;
  let fixture: ComponentFixture<TsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
