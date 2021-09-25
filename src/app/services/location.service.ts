import {Injectable} from '@angular/core';
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor() {
  }

  get(): Observable<GeolocationCoordinates> {
    return new Observable(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          position => {
            observer.next(position.coords);
            observer.complete();
          },
          error => observer.error(error),
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }
}
