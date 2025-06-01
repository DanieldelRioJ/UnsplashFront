import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-property-title',
    imports: [],
    styleUrl: './property-title.component.scss',
    templateUrl: './property-title.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyTitleComponent {}
