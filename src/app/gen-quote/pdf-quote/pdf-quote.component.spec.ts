import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfQuoteComponent } from './pdf-quote.component';

describe('PdfQuoteComponent', () => {
  let component: PdfQuoteComponent;
  let fixture: ComponentFixture<PdfQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
