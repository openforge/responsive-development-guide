import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { DevicesPopoverComponent } from './devices-popover.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [DevicesPopoverComponent],
    declarations: [DevicesPopoverComponent],
})
export class DevicesPopoverModule {}
