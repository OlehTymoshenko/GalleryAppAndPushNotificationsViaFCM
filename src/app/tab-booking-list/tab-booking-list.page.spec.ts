import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabBookingListPage } from './tab-booking-list.page';

describe('TabBookingListPage', () => {
  let component: TabBookingListPage;
  let fixture: ComponentFixture<TabBookingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabBookingListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabBookingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
