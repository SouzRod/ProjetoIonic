import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPage } from './graphic.page';

describe('GraphicPage', () => {
  let component: GraphicPage;
  let fixture: ComponentFixture<GraphicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
