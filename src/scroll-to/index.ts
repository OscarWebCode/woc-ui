export class WOCScrollTo {
  constructor(public gap: number) {}
  scrollTo(element: HTMLElement): void {
    if (!element) return;
    window.scrollTo({
      top: element.offsetTop - this.gap,
      behavior: 'smooth',
    });
  }
}
