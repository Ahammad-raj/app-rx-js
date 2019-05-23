// appo2.ts

import { Observable } from "rxjs";

/* create a new observable, providing the subscribe function. */
const observable: Observable<string> = new Observable(observer => {
  const interval = setInterval(() => {
    observer.next('Using Rxjs');
  }, 1000);

  console.log("obs...")

  // teardown
  return () => {
    clearInterval(interval);
  }
});

/* Subscribe to Notifications. */
 const obs = observable.subscribe(value => console.log(value));