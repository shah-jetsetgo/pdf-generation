import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoterecordsComponent } from './quoterecords.component';

describe('QuoterecordsComponent', () => {
  let component: QuoterecordsComponent;
  let fixture: ComponentFixture<QuoterecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoterecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoterecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
