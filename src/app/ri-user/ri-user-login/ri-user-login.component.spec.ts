import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiUserLoginComponent } from './ri-user-login.component';

describe('RiUserLoginComponent', () => {
  let component: RiUserLoginComponent;
  let fixture: ComponentFixture<RiUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
