import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallerySliderComponent } from './image-gallery-slider.component';

describe('ImageGallerySliderComponent', () => {
  let component: ImageGallerySliderComponent;
  let fixture: ComponentFixture<ImageGallerySliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGallerySliderComponent]
    });
    fixture = TestBed.createComponent(ImageGallerySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
