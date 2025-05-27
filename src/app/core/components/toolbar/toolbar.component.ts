import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { LangComponent } from '@core/components/lang/lang.component';
import { ThemeComponent } from '@core/components/theme/theme.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-toolbar',
    imports: [MatToolbar, LangComponent, ThemeComponent, TranslatePipe],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {}
