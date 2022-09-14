import { WOCSticky } from '../../../src/index';
export class DemoStickyPage {
  private _wocSticky: WOCSticky;
  constructor() {
    const headerElement: HTMLElement = document.getElementById('header') as HTMLElement;
    this._wocSticky = new WOCSticky({ element: headerElement, scrollHeight: 100, className: 'sticky' });
    this._bindDestroy();
  }

  private _bindDestroy(): void {
    const btn: HTMLButtonElement = document.getElementById('btn') as HTMLButtonElement;
    btn.addEventListener('click', () => {
      this._wocSticky.destroy();
      btn.remove();
    });
  }
}
