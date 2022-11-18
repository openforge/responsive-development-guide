import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'openforge-devices-popover',
    templateUrl: 'devices-popover.component.html',
    styleUrls: ['devices-popover.component.scss'],
})
export class DevicesPopoverComponent {
    // eslint-disable-next-line no-empty-function
    public constructor(public popoverController: PopoverController) {}

    public sizeselected(width: number, height: number): void {
        void this.popoverController.dismiss({ width, height }, 'selected');
    }
}
