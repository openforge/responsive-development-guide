import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from './popover.component';
import { TooltipComponent } from './tooltip.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
    public deviceSelected = 'Iphone 7';

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
            case 'Header':
                tooltipText = 'Modifies the rem value of the header font size';
                break;
            case 'Content':
                tooltipText = 'Modifies the rem value for all items inside of the content tag.';
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
            component: PopoverComponent,
            event: e,
            componentProps: {
                currentDevice: this.deviceSelected,
            },
        });

        void popover.onDidDismiss().then(response => {
            if (response.role === 'selected') {
                const sizeData = response.data as { height: number; width: number; device: string };
                this.deviceSelected = sizeData.device;
                const nodeList = Array.from(document.getElementsByClassName('phone') as HTMLCollectionOf<HTMLElement>);
                nodeList.forEach(ele => ele.style.setProperty('--device-height', `${sizeData.height}px`));
                nodeList.forEach(ele => ele.style.setProperty('--device-width', `${sizeData.width}px`));
            }
        });
        await popover.present();
    }
}
