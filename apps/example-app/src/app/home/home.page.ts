/* eslint-disable no-magic-numbers */
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { DevicesPopoverComponent } from './components/devices-popover/devices-popover.component';
import { TooltipComponent } from './tooltip.component';

@Component({
    selector: 'openforge-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
    public devicePhoneSelected = 'Default Phone Selected'; // * the type of phone
    public rootFontSize = 16; // defaults to 16
    public headerRem = 1; // defaults to 1rem
    public contentRem = 1; // defaults to 1rem
    public footerRem = 1; // defaults to 1rem

    public constructor(public popoverController: PopoverController) {
        console.log('home.page.ts', 'constructor()');
    }

    public documentModuleValueChange(value: string): void {
        this.rootFontSize = value as unknown as number;
        document.documentElement.style.setProperty('--document-font-size', `${value}px`);
        document.documentElement.style.setProperty('--document-font-size-900', `${+value - 3}px`);
        document.documentElement.style.setProperty('--document-font-size-400', `${+value - 6}px`);
    }

    public headerModuleValueChange(value: string): void {
        this.headerRem = value as unknown as number;
        document.documentElement.style.setProperty('--header-module-font-size', `${value}rem`);
    }

    public contentModuleValueChange(value: string): void {
        this.contentRem = value as unknown as number;
        document.documentElement.style.setProperty('--section-module-font-size', `${value}rem`);
        document.documentElement.style.setProperty('--cards-components-font-size', `${value}rem`);
    }

    public footerModuleValueChange(value: string): void {
        this.footerRem = value as unknown as number;
        document.documentElement.style.setProperty('--footer-module-font-size', `${value}rem`);
    }

    /*
     *
     *  Presents the tooltip displaying information regarding the selected slider icon
     *
     */
    public async presentTooltip(e: Event, type: string): Promise<void> {
        let tooltipText = '';
        switch (type) {
            case 'Document':
                tooltipText = 'Modifies the px value for font sizes used on the document. Affects the contents used throughout the whole document.';
                break;
            case 'Content':
                tooltipText = 'Modifies the rem value for all items inside of the content tag.';
                break;
            case 'Header':
                tooltipText = 'Modifies the rem value of the header font size';
                break;
            case 'Footer':
                tooltipText = 'Modifies the rem value of the footer font size';
                break;
        }
        const popover = await this.popoverController.create({
            component: TooltipComponent,
            event: e,
            componentProps: {
                tooltipText,
            },
        });
        await popover.present();
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
