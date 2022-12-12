import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultPhoneLayoutComponent } from './default-phone-layout.component';

@NgModule({
    imports: [CommonModule],
    exports: [DefaultPhoneLayoutComponent],
    declarations: [DefaultPhoneLayoutComponent],
})
export class DefaultPhoneLayoutModule {}
