import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
    selector: '[appGoBack]',
})
export class GoBackDirective {
    constructor(private readonly _location: Location) {}

    @HostListener('click')
    goBack() {
        this._location.back();
    }
}
