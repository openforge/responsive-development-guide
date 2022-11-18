import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { DevicesPopoverComponent } from './components/devices-popover/devices-popover.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
    public devicePhoneSelected = 'Default Phone';

    // eslint-disable-next-line no-empty-function
    public constructor(public popoverController: PopoverController) {}

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
        document.documentElement.style.setProperty('--cards-components-font-size', `${value}rem`);
    }

    public async presentPopover(e: Event): Promise<void> {
        const popover = await this.popoverController.create({
            component: DevicesPopoverComponent,
            event: e,
        });

        void popover.onDidDismiss().then(response => {
            if (response.role === 'selected') {
                const deviceSelected = response.data as string;
                this.devicePhoneSelected = deviceSelected;
            }
        });
        await popover.present();
    }
}
