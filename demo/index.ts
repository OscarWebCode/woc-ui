import { DemoScrollPage } from './pages/scroll/demo-scroll';
import { DemoStickyPage } from './pages/sticky/demo-sticky';
import { DemoTabsPage } from './pages/tabs/demo-tabs';
class DemoPage {
  constructor() {
    this._initDemoPages();
  }

  private _initDemoPages(): void {
    location.pathname.indexOf('scroll') !== -1 && new DemoScrollPage();
    location.pathname.indexOf('sticky') !== -1 && new DemoStickyPage();
    location.pathname.indexOf('tabs') !== -1 && new DemoTabsPage();
  }
}

window.onload = function () {
  new DemoPage();
};
