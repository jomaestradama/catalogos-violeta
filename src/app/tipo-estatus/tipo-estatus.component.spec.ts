import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEstatusComponent } from './tipo-estatus.component';

describe('TipoEstatusComponent', () => {
  let component: TipoEstatusComponent;
  let fixture: ComponentFixture<TipoEstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
