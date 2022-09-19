export interface WOCTabsOptions {
  parent: HTMLElement;
  tabItemAttribute?: string;
  tabContentAttribute?: string;
  defaultActiveIndex?: number;
}

export interface WOCTabsInterface {
  changeTab: (index: number) => void;
}

export class WOCTabs implements WOCTabsInterface {
  private _element: HTMLElement;
  private _tabItemAttribute: string;
  private _tabContentAttribute: string;
  private _defaultActiveIndex: number;

  private _itemsList: HTMLElement[] = [];
  private _contentsList: HTMLElement[] = [];

  constructor(public options: WOCTabsOptions) {
    if (!options.parent) {
      console.error(this, 'Please provide correct HTMLElement for parent property in the constructor()');
      return;
    }
    this._element = options.parent;
    this._tabItemAttribute = options.tabItemAttribute || 'data-woc-tab-item';
    this._tabContentAttribute = options.tabContentAttribute || 'data-woc-tab-content';
    this._defaultActiveIndex = options.defaultActiveIndex || 0;
    this._collectItems();
    this._collectContents();
    this.changeTab(this._defaultActiveIndex);
  }

  changeTab(index: number): void {
    const item: HTMLElement = this._itemsList[index];
    if (!item) return;
    this._hideAll();
    item.classList.add('active');
    const attribute = item.getAttribute(this._tabItemAttribute);
    if (!attribute) return;
    const content = this._element.querySelector(`[${this._tabContentAttribute}="${attribute}"]`);
    if (!content) return;
    content.classList.add('active');
  }

  private _collectItems(): void {
    const elements: HTMLElement[] = Array.from(this._element.querySelectorAll(`[${this._tabItemAttribute}]`));
    elements.forEach((item: HTMLElement, index: number) => {
      this._itemsList.push(item);
      item.addEventListener('click', () => this.changeTab(index));
    });
  }

  private _collectContents(): void {
    const elements: HTMLElement[] = Array.from(this._element.querySelectorAll(`[${this._tabContentAttribute}]`));
    elements.forEach((content: HTMLElement) => {
      this._contentsList.push(content);
    });
  }

  private _hideAll(): void {
    this._itemsList.forEach((item: HTMLElement, index: number) => {
      item.classList.remove('active');
      this._contentsList[index]?.classList.remove('active');
    });
  }
}
