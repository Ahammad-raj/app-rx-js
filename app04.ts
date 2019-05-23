
import { Observable } from "rxjs";

var observable = Observable.create((observer:any) => {
    observer.next('Rxjs is cool')
    observer.next('Liking it?')
    observer.complete()
    observer.next('This will not  get sent.')
})

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

function addItem(val:any) {console.log(val); }