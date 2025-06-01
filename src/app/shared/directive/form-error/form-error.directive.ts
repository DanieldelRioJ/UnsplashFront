import {
    AfterViewInit,
    DestroyRef,
    Directive,
    inject,
    Injector,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, combineLatest, startWith } from 'rxjs';
import {
    MatFormField,
    MatFormFieldControl,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { FormErrorService } from '@shared/directive/form-error/form-error.service';

@Directive({
    selector: '[appFormError]',
})
export class FormErrorDirective implements AfterViewInit {
    private readonly _fieldNameChangedSubject = new BehaviorSubject<
        string | null
    >(null);
    private readonly _fieldNameChanged$ =
        this._fieldNameChangedSubject.asObservable();
    private inputRef?: MatFormFieldControl<MatInput>;
    private readonly _destroyRef = inject(DestroyRef);

    @Input() set appFormErrorFrom(fieldName: string) {
        this._fieldNameChangedSubject.next(fieldName);
    }

    constructor(
        private readonly _inj: Injector,
        private readonly _formErrorService: FormErrorService,
        private readonly templateRef: TemplateRef<unknown>,
        private readonly viewContainerRef: ViewContainerRef
    ) {}

    public ngAfterViewInit(): void {
        // grab reference to MatFormField directive, where form control is accessible.
        const container = this._inj.get(MatFormField);
        this.inputRef = container._control;

        if (this.inputRef?.ngControl?.statusChanges == null) {
            console.error(
                `Field ${this._fieldNameChangedSubject.value} has no control`
            );
            return;
        }
        // sub to the control's status stream
        combineLatest([
            this.inputRef.ngControl.statusChanges.pipe(
                startWith(this.inputRef.ngControl.status)
            ),
            this._fieldNameChanged$.pipe(
                filter(fieldName => fieldName != null)
            ),
        ])
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(this.updateErrors);
    }

    private readonly updateErrors = ([state, fieldName]: [
        'VALID' | 'INVALID',
        string,
    ]): void => {
        this.viewContainerRef.clear();
        if (state === 'INVALID') {
            // active errors on the FormControl
            const controlErrors = this.inputRef!.ngControl!.errors;
            if (controlErrors) {
                // just grab one error
                Object.entries(controlErrors).forEach(error => {
                    const errorTranslation =
                        this._formErrorService.getTranslation(error, fieldName);
                    if (errorTranslation) {
                        this.viewContainerRef.createEmbeddedView(
                            this.templateRef,
                            {
                                $implicit: errorTranslation,
                            }
                        );
                    }
                });
            }
        }
    };
}
