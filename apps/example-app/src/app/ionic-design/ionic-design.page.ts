import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-ionic-design',
    templateUrl: 'ionic-design.page.html',
    styleUrls: ['ionic-design.page.scss'],
})
export class IonicDesignPageComponent {
    public documentModuleValueChange(value: number): void {
        document.documentElement.style.setProperty('--document-font-size', `${value}px`);
        document.documentElement.style.setProperty('--document-font-size-900', `${value - 3}px`);
        document.documentElement.style.setProperty('--document-font-size-400', `${value - 6}px`);
    }

    public headerModuleValueChange(value: number): void {
        document.documentElement.style.setProperty('--header-module-font-size', `${value}rem`);
    }

    public footerModuleValueChange(value: number): void {
        document.documentElement.style.setProperty('--footer-module-font-size', `${value}rem`);
    }

    public sectionModuleValueChange(value: number): void {
        document.documentElement.style.setProperty('--section-module-font-size', `${value}rem`);
    }
}
