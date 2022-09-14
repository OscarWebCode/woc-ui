import { WOCScrollTo } from '../../src/index';
export class DemoScrollPage {
  private _wocScroll: WOCScrollTo;
  constructor() {
    this._wocScroll = new WOCScrollTo();
    this._initScroll();
  }

  private _initScroll(): void {
    const btn: HTMLButtonElement = document.getElementById('scroll-btn') as HTMLButtonElement;
    const element: HTMLElement = document.getElementById('scroll') as HTMLElement;
    btn.addEventListener('click', () => {
      this._wocScroll.scrollTo(element);
    });
  }
}
