import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabBookingPage } from './tab-booking.page';

describe('TabBookingPage', () => {
  let component: TabBookingPage;
  let fixture: ComponentFixture<TabBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabBookingPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
