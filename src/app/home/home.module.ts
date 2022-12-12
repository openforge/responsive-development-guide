import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AppContentModule } from './components/app-content/app-content.module';
import { DefaultPhoneLayoutModule } from './components/default-phone-layout/default-phone-layout.module';
import { DevicesPopoverModule } from './components/devices-popover/devices-popover.module';
import { IphoneLayoutModule } from './components/iphone-layout/iphone-layout.module';
import { IphoneXLayoutModule } from './components/iphone-x-layout/iphone-x-layout.module';
import { HomePageComponent } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, DevicesPopoverModule, AppContentModule, DefaultPhoneLayoutModule, IphoneLayoutModule, IphoneXLayoutModule],
    declarations: [HomePageComponent],
})
export class HomePageModule {}
