import { DemoScrollPage } from './pages/scroll/demo-scroll';
import { DemoStickyPage } from './pages/sticky/demo-sticky';
class DemoPage {
  constructor() {
    this._initDemoPages();
  }

  private _initDemoPages(): void {
    location.pathname.indexOf('scroll') !== -1 && new DemoScrollPage();
    location.pathname.indexOf('sticky') !== -1 && new DemoStickyPage();
  }
}

window.onload = function () {
  new DemoPage();
};
