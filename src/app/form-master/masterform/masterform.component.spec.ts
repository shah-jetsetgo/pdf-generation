import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterformComponent } from './masterform.component';

describe('MasterformComponent', () => {
  let component: MasterformComponent;
  let fixture: ComponentFixture<MasterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
