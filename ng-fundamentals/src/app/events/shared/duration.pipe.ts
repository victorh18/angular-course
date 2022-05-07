import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {
    transform(value: number, ...args: any[]): any {
        const DURATIONS = {
            "1": "Half Hour",
            "2": "1 Hour",
            "3": "Half Day",
            "4": "Full Day",
        };

        return DURATIONS[value.toString()];
    }
}