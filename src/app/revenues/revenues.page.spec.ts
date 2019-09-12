import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesPage } from './revenues.page';

describe('RevenuesPage', () => {
  let component: RevenuesPage;
  let fixture: ComponentFixture<RevenuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
