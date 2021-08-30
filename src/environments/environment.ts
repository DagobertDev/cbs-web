// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://localhost:5001",
  firebaseConfig: {
    apiKey: "AIzaSyAEf14fHSLsNIyOzDt5p0C8xKr4MVRhHos",
    authDomain: "community-bike-sharing.firebaseapp.com",
    projectId: "community-bike-sharing",
    storageBucket: "community-bike-sharing.appspot.com",
    messagingSenderId: "278243155156",
    appId: "1:278243155156:web:5fb2d849f2d8df6a692f41"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
