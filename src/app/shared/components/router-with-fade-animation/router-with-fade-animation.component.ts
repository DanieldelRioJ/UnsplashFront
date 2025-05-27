import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeAnimation } from '@shared/animations/router-fade.animation';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-router-with-fade-animation',
    imports: [RouterOutlet],
    templateUrl: './router-with-fade-animation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeAnimation],
})
export class RouterWithFadeAnimationComponent {}
