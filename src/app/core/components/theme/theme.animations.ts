import { animate, style, transition, trigger } from '@angular/animations';

export const slideIcon = trigger('slideIcon', [
    transition(':enter', [
        style({ top: '0', opacity: 0 }),
        animate('300ms ease-out', style({ top: '50%', opacity: 1 })),
    ]),
    transition(':leave', [
        animate('300ms ease-in', style({ top: '100%', opacity: 0 })),
    ]),
]);
