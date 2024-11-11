import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onCofirmLeavePage($event)'
    }
})
export class SafeLinkDirective{

    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() { 
        console.log("SafeLinkDirective is active")
    }

    onCofirmLeavePage(event: MouseEvent) { 
        const wantsToLeave = window.confirm('Do you want to leave the app ?');

        if (wantsToLeave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=myapp';
            return;
        }
        
        event?.preventDefault();
    }
}