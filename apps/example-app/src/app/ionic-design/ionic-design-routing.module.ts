import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IonicDesignPageComponent } from './ionic-design.page';

const routes: Routes = [
    {
        path: '',
        component: IonicDesignPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IonicDesignPageRoutingModule {}
