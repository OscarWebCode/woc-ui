import { WOCTabs } from '../../../src/index';
export class DemoTabsPage {
  constructor() {
    const tabsContainer: HTMLElement = document.getElementById('tabs') as HTMLElement;
    const tabs = new WOCTabs({
      parent: tabsContainer,
      tabItemAttribute: 'data-tab',
      tabContentAttribute: 'data-content',
      defaultActiveIndex: 0,
    });
  }
}
