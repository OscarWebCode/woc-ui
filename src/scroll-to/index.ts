export type WOCScrollToOptions = {
  gap: number;
};
export class WOCScrollTo {
  private _gap: number;
  private _behavior: ScrollBehavior = 'smooth';
  constructor(public options?: WOCScrollToOptions) {
    this._gap = options?.gap || 0;
  }
  public scrollTo(element: HTMLElement): void {
    if (!element) {
      throw new Error('The element should be HTMLElement');
    }
    if (window && window.hasOwnProperty('scrollTo')) {
      window.scrollTo({
        top: element.offsetTop - this._gap,
        behavior: this._behavior,
      });
    }
  }
}
