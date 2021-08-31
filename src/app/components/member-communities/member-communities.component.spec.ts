import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberCommunitiesComponent} from './member-communities.component';

describe('MemberCommunitiesComponent', () => {
  let component: MemberCommunitiesComponent;
  let fixture: ComponentFixture<MemberCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberCommunitiesComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
