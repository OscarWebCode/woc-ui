export interface WOCStickyOptions {
  element: HTMLElement;
  scrollHeight: number;
  className?: string;
  /**
   * Turns on the default (JavaScript) animation that fade-in element from top to bottom
   */
  defaultAnimation?: boolean;
}

export type WOCStickyStyles = {
  position: CSSStyleDeclaration['position'];
  translate: CSSStyleDeclaration['translate'];
  transition: CSSStyleDeclaration['transition'];
};
export class WOCSticky {
  private _element: HTMLElement;
  private _className: string;
  private _enabled: boolean = false;
  private _defaultStyles: WOCStickyStyles = {
    position: 'static',
    translate: '',
    transition: '',
  };
  private _transitionDelay: number = 300;
  private _defaultAnimation: boolean = false;
  private _windowScrollHandler: () => void;

  constructor(public options: WOCStickyOptions) {
    this._className = options.className || 'sticky';
    this._element = options.element;
    this._defaultAnimation = options.defaultAnimation || false;
    this._defaultAnimation && this._collectStyles();
    this._windowScrollHandler = this._onWindowScroll.bind(this);
    this._bindEvents();
    this._controlSticky();
  }

  private _collectStyles(): void {
    this._defaultStyles.position = window.getComputedStyle(this._element).position;
    this._defaultStyles.translate = window.getComputedStyle(this._element).translate;
    this._defaultStyles.transition = window.getComputedStyle(this._element).transition;
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
    this._addClasses();
    this._defaultAnimation && this._setDefaultAnimation();
    this._enabled = true;
  }

  private _disableStickyHeader(): void {
    if (!this._enabled) return;
    this._removeClasses();
    this._defaultAnimation && this._resetDefaulAnimation();
    this._enabled = false;
  }

  private _addClasses(): void {
    this._element.classList.add(this._className);
    document.body.classList.add(this._className);
  }

  private _removeClasses(): void {
    this._element.classList.add(this._className);
    document.body.classList.add(this._className);
  }

  public destroy(): void {
    this._removeClasses();
    this._resetDefaulAnimation();
    window.removeEventListener('scroll', this._windowScrollHandler);
  }

  private _setDefaultAnimation(): void {
    this._element.style.position = 'fixed';
    this._element.style.translate = '0 -100%';
    this._element.style.transition = '';
    setTimeout(() => {
      this._element.style.translate = '0 0';
      this._element.style.transition = 'translate .5s';
    }, this._transitionDelay);
  }

  private _resetDefaulAnimation(): void {
    this._element.style.position = this._defaultStyles.position;
    this._element.style.translate = this._defaultStyles.translate;
    this._element.style.transition = this._defaultStyles.transition;
  }
}
