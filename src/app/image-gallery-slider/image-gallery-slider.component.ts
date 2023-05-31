import { Component, Input } from '@angular/core';

import { SlideInterface } from '../image-gallery-slider/types/slide.interface'

@Component({
  selector: 'app-image-gallery-slider',
  templateUrl: './image-gallery-slider.component.html',
  styleUrls: ['./image-gallery-slider.component.css'],
})
export class ImageGallerySliderComponent {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;
  selectedImageIndex: number = 0;

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}
