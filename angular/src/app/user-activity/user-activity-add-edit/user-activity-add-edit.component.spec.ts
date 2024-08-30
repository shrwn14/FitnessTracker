import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityAddEditComponent } from './user-activity-add-edit.component';

describe('UserActivityAddEditComponent', () => {
  let component: UserActivityAddEditComponent;
  let fixture: ComponentFixture<UserActivityAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserActivityAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserActivityAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
