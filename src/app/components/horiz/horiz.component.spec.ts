import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizComponent } from './horiz.component';

describe('HorizComponent', () => {
  let component: HorizComponent;
  let fixture: ComponentFixture<HorizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
