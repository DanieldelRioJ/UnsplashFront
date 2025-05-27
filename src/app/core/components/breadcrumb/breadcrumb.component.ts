import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    BreadcrumbComponent as XngBreadcrumbComponent,
    BreadcrumbItemDirective,
} from 'xng-breadcrumb';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-breadcrumb',
    imports: [XngBreadcrumbComponent, BreadcrumbItemDirective, TranslatePipe],
    templateUrl: './breadcrumb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {}
