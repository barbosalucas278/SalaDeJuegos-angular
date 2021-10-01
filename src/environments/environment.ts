// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Se setean las variables de enviroment del proyecto
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAImverduNhWyuXVG75jtTusU9gPGtlcQw',
    authDomain: 'lbarbosa-tp-lb4-28ecf.firebaseapp.com',
    databaseURL: 'https://lbarbosa-tp-lb4-28ecf-default-rtdb.firebaseio.com',
    projectId: 'lbarbosa-tp-lb4-28ecf',
    storageBucket: 'lbarbosa-tp-lb4-28ecf.appspot.com',
    messagingSenderId: '703073583820',
    appId: '1:703073583820:web:7daff820b53d7b30753869',
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
