import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-image-advanced-search',
    imports: [MatExpansionModule],
    templateUrl: './image-advanced-search.component.html',
    styleUrl: './image-advanced-search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAdvancedSearchComponent {}
