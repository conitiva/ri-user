import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiUserLogoffComponent } from './ri-user-logoff.component';

describe('RiUserLogoffComponent', () => {
  let component: RiUserLogoffComponent;
  let fixture: ComponentFixture<RiUserLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiUserLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiUserLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
