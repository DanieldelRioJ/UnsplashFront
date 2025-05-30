import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-no-valid-filter-placeholder',
    imports: [],
    templateUrl: './no-valid-filter-placeholder.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoValidFilterPlaceholderComponent {
    text = input.required<string>();
}
