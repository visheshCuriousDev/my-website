import { Subject } from "rxjs";

export class headerService {
  menuSliderEvents;
  menuSliderOpen = false;

  constructor() {
    this.menuSliderEvents = new Subject();
  }

  openMenuSlider() {
    this.menuSliderOpen = true;
    this.menuSliderEvents.next(true);
  }

  closeMenuSlider() {
    this.menuSliderOpen = false;
    this.menuSliderEvents.next(false);
  }
}
