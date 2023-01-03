// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'clean-architecture-angular',
    appId: '1:679401466276:web:3b89ce17a493032b483931',
    storageBucket: 'clean-architecture-angular.appspot.com',
    apiKey: 'AIzaSyCYkky-wWXq6R4NB0xmwExRkhF6Tcfl6ng',
    authDomain: 'clean-architecture-angular.firebaseapp.com',
    messagingSenderId: '679401466276',
  },
  production: false,
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "AIzaSyCYkky-wWXq6R4NB0xmwExRkhF6Tcfl6ng",
    authDomain: "clean-architecture-angular.firebaseapp.com",
    projectId: "clean-architecture-angular",
    storageBucket: "clean-architecture-angular.appspot.com",
    messagingSenderId: "679401466276",
    appId: "1:679401466276:web:3b89ce17a493032b483931"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
