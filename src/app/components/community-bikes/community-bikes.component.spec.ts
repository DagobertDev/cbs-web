import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommunityBikesComponent} from './community-bikes.component';

describe('AllBikesComponent', () => {
  let component: CommunityBikesComponent;
  let fixture: ComponentFixture<CommunityBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityBikesComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
