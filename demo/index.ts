import { DemoScrollPage } from './pages/demo-scroll';
class DemoPage {
  constructor() {
    this._initDemoPages();
  }

  private _initDemoPages(): void {
    new DemoScrollPage();
  }
}

window.onload = function () {
  new DemoPage();
};
