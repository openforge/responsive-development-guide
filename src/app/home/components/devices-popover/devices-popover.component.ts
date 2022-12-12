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

    public selectDevice(device: string): void {
        void this.popoverController.dismiss(device, 'selected');
    }
}
