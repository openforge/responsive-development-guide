import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonicDesignPageComponent } from './ionic-design.page';
import { IonicDesignPageRoutingModule } from './ionic-design-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, IonicDesignPageRoutingModule],
    declarations: [IonicDesignPageComponent],
})
export class IonicDesignPageModule {}
