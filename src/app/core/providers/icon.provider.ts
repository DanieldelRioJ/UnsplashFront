import {
    EnvironmentProviders,
    inject,
    provideAppInitializer,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function provideCustomIcons(): EnvironmentProviders {
    return provideAppInitializer(() => {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        iconRegistry.addSvgIconSetInNamespace(
            'heroicons_outline',
            sanitizer.bypassSecurityTrustResourceUrl(
                'public/icons/heroicons-outline.svg'
            )
        );
        iconRegistry.addSvgIconSetInNamespace(
            'heroicons_solid',
            sanitizer.bypassSecurityTrustResourceUrl(
                'public/icons/heroicons-solid.svg'
            )
        );
        iconRegistry.addSvgIconSetInNamespace(
            'enterprise',
            sanitizer.bypassSecurityTrustResourceUrl(
                'public/icons/enterprise.svg'
            )
        );
    });
}
