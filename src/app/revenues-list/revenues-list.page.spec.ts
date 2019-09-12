import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesListPage } from './revenues-list.page';

describe('RevenuesListPage', () => {
  let component: RevenuesListPage;
  let fixture: ComponentFixture<RevenuesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
