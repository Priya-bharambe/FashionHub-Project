import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsecComponent } from './topsec.component';

describe('TopsecComponent', () => {
  let component: TopsecComponent;
  let fixture: ComponentFixture<TopsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
