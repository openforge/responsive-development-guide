import { Component, Input } from '@angular/core';

@Component({
    selector: 'openforge-app-content',
    templateUrl: 'app-content.component.html',
    styleUrls: ['app-content.component.scss'],
})
export class AppContentComponent {
    @Input() borderRadius: boolean = true;
}
