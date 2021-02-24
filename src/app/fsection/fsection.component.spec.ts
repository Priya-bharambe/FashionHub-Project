import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsectionComponent } from './fsection.component';

describe('FsectionComponent', () => {
  let component: FsectionComponent;
  let fixture: ComponentFixture<FsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
