// 1;
// console.log(10);

// setTimeout(function () {
//   console.log(20);
// }, 1000);

// setTimeout(function () {
//   console.log(30);
// }, 0);

// console.log(40);

// console.log(10) կմտնի callstack ավարտվի դուրս գա, setTimeout(function () {console.log(20);}, 1000); setTimeOut-ի сallback կգնա Web API,
// 2-րդ setTimeOut()-ի callback-ը  կգնա web Api, console.log(40) կմտնի callStack ավարտվի դուրս գա։ 0 միլիվ հետո Web Api մտնելուց,
// console.log(30) կմտնի մակրոթասկերի հերթ, մի վայրկյան հետո նրա հետևից կմտնի console.log(20), callstackum բոլոր սինխրոն գործ․
// անելուց հետո event loop կնայի միկրոթակերի հերթ, ոչ մի բան չգտելով կգա մակրոթասկերի հերթ, կտպի 30, հետո 20։ Արդյունքում ՝10,40,30,20

// 2.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
// });

// promise1.then(() => {
//   console.log(3);
// });

// console.log(4);
// մտնումա promise1 մեջ, console.log(1) ուղարկում callstack, resolve("success") success փոխանցումա .then-ի callback-ին որպես պարամետր
// promise1.then  resolve-ից հետո console.log(3) տանումա միկրոթասկերի հերթ, console.log(4); սինխրոնա էլի գնումա callstack, callstackum
// սկզբում կատարվում են սինխրոն գործողությունները, հետո event loop մանա գալիս միկրոթասկերի հերթից callstack բերում console.log(3)-ը;
// Արդյունքում՝ 1,4,3

// 3.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });
// promise1.then(() => {
//   console.log(3);
// });
// console.log(4);

// նախորդ խնդրի սկզբունքով 1,4 ուղղակի pendingi-ց fulfilled չի լինում դրա համար promise1.then resolve-ի բացակայության պատճառով log չի անում։

// 4;
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("resolve1");
// });

// const promise2 = promise1.then((res) => {
//   console.log(res);
// });

// console.log("promise1:", promise1);
// console.log("promise2:", promise2);

// Մտնում promise1 console.log(1) տանում callstack, resolve("resolve1") "resolve1" փոխանցում promise1.then callback-ի փոփոխականին,հետո հայտարարվումա promise2 որին վերագրում
// ենք promise1.then((res) => {console.log(res);այս պահին ․then-ի callback տանումա միկրոթասքերի հերթ և վերադարձնում նոր pending վիճակում promise, հետո 56 տողի
// console.log-ում սկզբում տպումա "promise1:" string, հետո արդեն resolved promise1, resolve1 result-ով և fulfilled վիճակով, հետո էլի սինխրոն 57 տողի console.log("promise2:", promise2);
// աշխատում տպում "promise2:" սթրինգ, և 52 տողի վերադարձրած promise2 pending վիճակով բայց undefined result-ով: Հետո event loop սինխրն գործ․ հետո գնում միկրոասկերի հերթից
// բերումա callstack promise1.then-ի callback և տպում "resolve1"։ Արդյունքում՝ 1, "promise1", promise resolved վիճակում և "resolve1" result-ով, "promise2" և promise2
// pending վիճակում, հետո նոր "resolve1"

// 5;
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// fn().then((res) => {
//   console.log(res);
// });
// console.log(2);

// fn function որում հայտարարվում է promise, console.log(1), հետո promise state pending-fulfilled, հետո ֆունկցիան կանչում ենք console.log(1) գնումա callstack,
// արվում դուրս գալիս, ․.then((res) => {console.log(res);}); .then-ի callback՝ այսինքն console.log("success") տանումա միկրոթասկերի հերթ, console.log(2) մտնումա
// callstack,տպում դուրսա գալիս, հետո event loop միկրոթասկերի հերթից console.log("success") տանումա callstack, տպվում, դուրսա գալիս։ Արդյունքում՝ 1,2,"succes"
// 6.
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

// մտնումա console.lo("start") տաում callstack, setTimeOut-ի callback տանում web APi, այնտեղից մակրոթասկերի հերթ, Promise.resolve().then(() => {
// console.log("resolve"); console.log("resolve"); -ը տանումա միկրոթասկերի հերթ, console.log("end")-ը callstack, callstakum սինխրոն
// գործողությունների ավարտից հետո event loop գնումա միկրոթասկերի հերթից(քանի որ այն առաջնահերթ է մակորթասկերի հերթերի նկատամբ) վերցնում
// resolve տանում callstack, հետո մակրոթասկերի հերթից seTimeout տանումա callstack, արդյունքւմ "start", "end", "resolve", setTimeout

// 7.
// const promise = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//     console.log("timerStart");

//     resolve("success");

//     console.log("timerEnd");
//   }, 0);

//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// կմտնի սկզբում console.log(1) տանի calstack, ավարտվի դուրս գա, հետո setTimeOut կմտնի callstack, callback-ներ կուղարկի Web Api, հետո console.log(2) կմտնի callstack
// արվի դուրս գա,promise.then((res) => {  console.log(res);});-կսպասի promise դառնա fulfilled callback փոխանցի միկրոթասքերի հերթ, console.log(4); կմտնի callstack
// արվի դուրս գա, event loop ման կգա միկրոթասկերի հերթում բան չի գտնի, կգնա մակրոթասկերի հերթ console.log("timerStart")- կտնի callstack, resolve("success"); .then-ի
// callback կտանի միկրոթսկերի հերթ,   console.log("timerEnd") կտանի callstack, այստեղ ավարտելով սաղ գործողությունները կգնա միկրոթասկերի հերթից վերցնի ․then-ի
// caLlback կտանի callstack կանի դուրս գա։ Արդյունքում 1,2,4,"timerStart","timerEnd","success"

// 8.

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const timer3 = setTimeout(() => {
//     console.log("timer3");
//   }, 0);
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

// console.log("start");

// timer1 setTimeout-ի callback web Api ասում 0 վայրկյանից կտանես մակրոթասկերի հերթ, հետո նույնը արվումա timer2-ի հետ, հետո սինխրոն արվումա console.log("start");,
// հետո սինխրոն գործողությունները ավարտելուց հետո, event loop նայումա միկոթասկերի հերթ, բան չգտնելով գնումա միկրոթսկերի հերթ, որտեղ սկզբում  console.log("timer1");
// ուղարկվումա callstack, հետո timer3 ուղարկվումա Web Api ասում 0 վայրկյանից callback կբերես մակրոթասկերի  հերթ, հետո  console.log("timer2"); տարվումա callstack:
// callstack log արվում "timer1" և "timer 2", event loop նորից գնումա միկրոթասկերի հերթ բան չի գտնում, գնում մակրոթասկերի հերթ, այնտեղից timer3 տանում callstack և արվում։
// Արդյունքում՝ "start","timer1","timer2","timer3"

// 9.
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);
// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// Արել ենք դասի ժամանակ)

// // 10.
// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise2 = Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);
// console.log("start");

// մտնումա promise1  ուղարկում callback-ները միկրոթասկերի հերթ, հետո timer1-ում setTimeout-ի callbackներ ուղարկում  Web Api,
// հետո console.log("start");-ը մտնումա callstack արվում դուրսա գալիս,
// event loop գնումա միկրոթասկերի հերթ Promise.resolve().then(()-ի callback-ների մոտ,console.log("promise1"); ուարկում callstack
// այն արվում դուրսա գալիս, հետո timer2-ի setTimeout-ի callback ուղարկում Web Api, event loop նայումա միկրոթասկերի հերթում էլ բան չկա գնումա նորից մակրոթասկերի հերթ
// console.log("timer1"); ուղարկվումա callstack, արվում դուրսա գալիս, Promise.resolve().then(()-ի callback գնումա միկրոթասկերի հերթ, event loop նորիցա գնում միկրոթասկերի
// հերթ console.log("promise2") ուղարկում callstack արվում դուրսա գալիս, էլ բան չգտնելով գնումա մակրոթասկեր հերթ console.log("timer2") ուղարկում callstack արվում դուր
// գալիս; Արդյունքում՝ "start","promise1","timer1","promise2","timer2"

// // 11.
// const promise1 = new Promise((resolve, reject) => {
//   const timer1 = setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });

// console.log("promise1", promise1);
// console.log("promise2", promise2);

// const timer2 = setTimeout(() => {
//   console.log("promise1", promise1);
// //   console.log("promise2", promise2);
// }, 2000);

// մտնումա promise1 , timer1-ի setTimeout callback կուղարկի Web Api, կմտնի promise2 promise1.then(() => { throw new Error("error!!!")}); կսպասի promise1 fulfilled դառնա
// և error տա, հետո console.log("promise1", promise1); կտպի "promise1" սթրինգ և promise1 panding վիճակում, քանի որ իրա ռեսոլվը Web Api-ի մեջա դեռ, հետո
// console.log("promise2", promise2); կտպի "promise2" string և promise2- որը նույնպես pandinga, քանի որ սպասումա promise1 fulfilled դառնա որ error քցի, հետո timer2
// setTimeout callback ներ կքցի մակրոթասկերի հերթ, 1 վայրկյան հետո event loop չգնելով ոչինի միկրոթասկերի հերթում, կգնա մակրոթասկերի հերթ, promise1 կդառձնի fulilled,
// event loop կգնա միկրոթասկերի հերթ, որտեղ այդ պահին կհայտնվի promise1.then-ի callback-ը, քանի որ այն սպասում էր promise1 դառնա fulfiled, և error կքցի, այդ պատճառով
// ունենք file.js:194 Uncaught (in promise) Error: error!!!, քանի որ այդ error հետո catch չենք անում։ 2 Վայրկյն հետո event loop կգա մակրոթասկերի հերթ
// console.log("promise1", promise1); կուղարկի callstack, "promise1" string կտպի, և fulfilled վիճակով և "success" result-ով promise: հետո  console.log("promise2", promise2)
// callstack կուղարկվի և կտպի "promise2" string և rejected վիճակով promise, քանի որ error արդեն քցվելա։
