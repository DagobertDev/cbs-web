import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionConverter'
})
export class PositionConverterPipe implements PipeTransform {

  transform(value?: GeolocationCoordinates, ...args: unknown[]): google.maps.LatLngLiteral {
    return value ? {lat: value.latitude, lng: value.longitude} : {lat: 0, lng: 0};
  }
}
