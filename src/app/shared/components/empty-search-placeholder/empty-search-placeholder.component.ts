import { ChangeDetectionStrategy, Component, input } from '@angular/core';


// TODO parece moi parecido ao EmptySearchPlaceholderComponent, non miraches como xuntalos?
@Component({
    selector: 'app-empty-search-placeholder',
    imports: [],
    templateUrl: './empty-search-placeholder.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptySearchPlaceholderComponent {
    text = input.required<string>();
}
