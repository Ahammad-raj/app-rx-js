


import { Observable } from "rxjs";


var observable = Observable.create((observer:any) => {
    try {
        observer.next('Rxjs is cool')
        observer.next('Liking it?')
        setInterval(() => {
            observer.next('delayed msg')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);


// continues infinitely ...
var subscription2 = observable.subscribe(
    (x:any) => addItem(x)  
);

function addItem(val:any) {console.log(val); }


setTimeout(() => {
    console.log("time over.....");
    subscription.unsubscribe();
}, 6001);

