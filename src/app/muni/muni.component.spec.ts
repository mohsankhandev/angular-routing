import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuniComponent } from './muni.component';

describe('MuniComponent', () => {
  let component: MuniComponent;
  let fixture: ComponentFixture<MuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
