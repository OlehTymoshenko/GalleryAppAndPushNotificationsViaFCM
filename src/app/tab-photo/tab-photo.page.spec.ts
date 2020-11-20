import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabPhotoPage } from './tab-photo.page';

describe('TabPhotoPage', () => {
  let component: TabPhotoPage;
  let fixture: ComponentFixture<TabPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabPhotoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
