import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): ValidationErrors {
        let address = formGroup.controls['address'];
        let city = formGroup.controls['city'];
        let country = formGroup.controls['country'];
        let onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        let isPhysicalLocationComplete = (address.value && city.value && country.value);

        if (isPhysicalLocationComplete || onlineUrl.value)
            return null;

        return { locationValidator: false }

    }
}
