import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
    public documentModuleValueChange(value: string): void {
        document.documentElement.style.setProperty('--document-font-size', `${value}px`);
        document.documentElement.style.setProperty('--document-font-size-900', `${+value - 3}px`);
        document.documentElement.style.setProperty('--document-font-size-400', `${+value - 6}px`);
    }

    public headerModuleValueChange(value: string): void {
        document.documentElement.style.setProperty('--header-module-font-size', `${value}rem`);
    }

    public footerModuleValueChange(value: string): void {
        document.documentElement.style.setProperty('--footer-module-font-size', `${value}rem`);
    }

    public sectionModuleValueChange(value: string): void {
        document.documentElement.style.setProperty('--section-module-font-size', `${value}rem`);
    }
}
