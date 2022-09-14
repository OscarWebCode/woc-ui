export interface WOCStickyOptions {
  element: HTMLElement;
  scrollHeight: number;
  className?: string;
}
export class WOCSticky {
  private _element: HTMLElement;
  private _className: string;
  private _enabled: boolean = false;
  private _windowScrollHandler: () => void;

  constructor(public options: WOCStickyOptions) {
    this._className = options.className || 'sticky';
    this._element = options.element;
    this._windowScrollHandler = this._onWindowScroll.bind(this);
    this._bindEvents();
    this._controlSticky();
  }

  private _bindEvents(): void {
    this._bindWindowScrollListener();
  }

  private _bindWindowScrollListener(): void {
    window.addEventListener('scroll', this._windowScrollHandler);
  }

  private _onWindowScroll(): void {
    this._controlSticky();
  }

  private _controlSticky(): void {
    if (window.scrollY > this.options.scrollHeight) {
      this._enableStickyHeader();
    }
    if (window.scrollY === 0) {
      this._disableStickyHeader();
    }
  }

  private _enableStickyHeader(): void {
    if (this._enabled) return;
    this._toggleClasses();
    this._enabled = true;
  }

  private _disableStickyHeader(): void {
    if (!this._enabled) return;
    this._toggleClasses();
    this._enabled = false;
  }

  private _toggleClasses(): void {
    this._element.classList.toggle(this._className);
    document.body.classList.toggle(this._className);
  }

  public destroy(): void {
    window.removeEventListener('scroll', this._windowScrollHandler);
  }
}
