import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageComponent } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PopoverComponent } from './popover.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
    declarations: [HomePageComponent, PopoverComponent],
})
export class HomePageModule {}
