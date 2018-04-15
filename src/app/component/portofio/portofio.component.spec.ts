import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofioComponent } from './portofio.component';

describe('PortofioComponent', () => {
  let component: PortofioComponent;
  let fixture: ComponentFixture<PortofioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortofioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
