import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'decimalMarker'
})

export class DemicalMarkerDirective implements PipeTransform{
    transform(value: number): string{
        return value.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',')
    }
}