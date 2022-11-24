import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-tooltip',
    template: ` <p>{{ tooltipText }}</p> `,
    styles: ['p { padding: 10px; }'],
})
export class TooltipComponent {
    @Input() public tooltipText = '';
    // eslint-disable-next-line no-empty-function
    public constructor(public popoverController: PopoverController) {}

    public dismiss(): void {
        void this.popoverController.dismiss();
    }
}
