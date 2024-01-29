import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersGridComponent } from './members-grid.component';

describe('MembersGridComponent', () => {
  let component: MembersGridComponent;
  let fixture: ComponentFixture<MembersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembersGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
