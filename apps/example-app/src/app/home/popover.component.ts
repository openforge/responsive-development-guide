import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-popover',
    template: ` <ion-list>
        <ion-item button (click)="sizeselected(320, 568, 'Iphone 5')">Iphone 5</ion-item>
        <ion-item button (click)="sizeselected(375, 667, 'Iphone 7')">Iphone 7</ion-item>
        <ion-item button (click)="sizeselected(390, 844, 'Iphone 12 Pro')">Iphone 12 Pro</ion-item>
        <ion-item button (click)="sizeselected(768, 1024, 'iPad Mini')">iPad Mini</ion-item>
        <ion-item button (click)="sizeselected(393, 851, 'Pixel 5')">Pixel 5</ion-item>
        <ion-item button (click)="sizeselected(412, 906, 'Oneplus 8 Pro')">Oneplus 8 Pro</ion-item>
        <ion-item button (click)="sizeselected(360, 640, 'Samsung Galaxy S6')">Samsung Galaxy S6</ion-item>
        <ion-item button (click)="sizeselected(360, 740, 'Samsung Galaxy 8+')">Samsung Galaxy 8+</ion-item>
    </ion-list>`,
})
export class PopoverComponent {
    // eslint-disable-next-line no-empty-function
    public constructor(public popoverController: PopoverController) {}

    public sizeselected(width: number, height: number, device: string): void {
        void this.popoverController.dismiss({ width, height, device }, 'selected');
    }
}
