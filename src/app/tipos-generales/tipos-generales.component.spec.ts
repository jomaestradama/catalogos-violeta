import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposGeneralesComponent } from './tipos-generales.component';

describe('TiposGeneralesComponent', () => {
  let component: TiposGeneralesComponent;
  let fixture: ComponentFixture<TiposGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
