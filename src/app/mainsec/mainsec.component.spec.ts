import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsecComponent } from './mainsec.component';

describe('MainsecComponent', () => {
  let component: MainsecComponent;
  let fixture: ComponentFixture<MainsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
