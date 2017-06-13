import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiUserListComponent } from './ri-user-list.component';

describe('RiUserListComponent', () => {
  let component: RiUserListComponent;
  let fixture: ComponentFixture<RiUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
