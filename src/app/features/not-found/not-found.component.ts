import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-not-found',
    imports: [MatButton, MatIcon, RouterLink, TranslatePipe],
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
