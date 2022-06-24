import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioCardComponent } from './portofolio-card.component';

describe('PortofolioCardComponent', () => {
  let component: PortofolioCardComponent;
  let fixture: ComponentFixture<PortofolioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofolioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
