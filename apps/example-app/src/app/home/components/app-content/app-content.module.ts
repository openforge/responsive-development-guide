import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AppContentComponent } from './app-content.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [AppContentComponent],
    declarations: [AppContentComponent],
})
export class AppContentModule {}
