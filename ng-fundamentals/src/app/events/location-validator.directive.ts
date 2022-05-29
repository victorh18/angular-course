import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): ValidationErrors {
        const address = formGroup.controls['address'];
        const city = formGroup.controls['city'];
        const country = formGroup.controls['country'];
        const onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        const isPhysicalLocationComplete = (address.value && city.value && country.value);

        if (isPhysicalLocationComplete || onlineUrl.value)
            return null;

        return { locationValidator: false }

    }
}
