import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SimulationDeviceContentComponent } from './simulation-device-content.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [SimulationDeviceContentComponent],
    declarations: [SimulationDeviceContentComponent],
})
export class SimulationDeviceContentModule {}
