0. Inch programming peredaymner giteq, voronq bnorosh en javascriptin?
Voronq en himnakan konceptnere OOP-i ev FP?
Pure functions
Immutability
Functions as first-class entities
Functions composition
High order functions
Recursion
Currying/Memoization

2. JavaScript-e vopres cragravorman lezu signle-treaded e te voch? Isk vonc karogh enq browser-i makardakum iren sarqel multi thread? Erbeve lsel eq web worker-neri masin?


3. Inch e hoistinge jsum, ev canot eq temporary dead zonin?

```js
var greeting;
function greeting() {
    console.log("Hello!");
}
var greeting;
typeof greeting;       
var greeting = "Hello!";
typeof greeting; 
```

4. Knsheq mi qani aknhayt patchar, voronq hangecnum en memory leak-i ev stackOverFlow-i.


5. Kpatmeq mi poqr scope-i masin? Qani tesaki scope giteq? isk canot eq parameter scopein kam name scope-in?
Karogh eq nshel te inchpes en irenc pahum functionnere block scope-i mej?

```js
console.log(innerFunction)

{
    function innerFunction(){
        return 12
    }
}
```


6. Vorn e tarberutyune objecneri ev complex data structurneri? Nkati unem map ev weekmap-i.




7. Knsheq himanakn ketere vorov arrow functione tarbervum e myus functionneric?

```js

const foo = function () {
  this.x = 5;
  (function () {
      this.x = 3;
  })();
  console.log(this.x);
};

const obj = {
  x: 4,
  logger: function () {
      console.log(this.x);
  }
};

foo(); 
new foo(); 
obj.logger(); 
new obj.logger();


// 2
const obj1 = {
    name:"John"
}
const obj2 = {
    name:"Maria"
}

function printName() {
    return this.name
}

const f1 = printName.bind(obj1)
 const f2 = f1.bind(obj2)
 console.log(f2());
```

8. inch e closure? 



9. Vorn e tarberutyune class-i ev constructor function-i? 




10. Erbeve lsel eq dervied constructor functionneri masin ev inchpes e  ayn azdum new keywordi ashxatanqi vra?



11. TypeScript-ov ashxatel eq? Ay orinak knerkayacneq typescriptum static, private, protected methodnere inchpes en ashxatum ev ardyoq menq unenq hamapatasxan implementacian jsum? 




12. ekeq ancum katarenq asyncronutyane. 
Kpatmeq mi poqr promisneric, inchi hamar en ogtagorcvum u irenc himnakan methodnere.



13. Canot eq osi 7 leyernerin? Open Systems Interconnect.
knsheq http1-i ev http2-i tarberutyune? vorn e aravelutyune ogtagorcelu http2 1-i het hamematac
pipelining, HOLBlocking, keep alive, multiplexing

14. Isk vorn e tarberutyune tcp-i ev udp-i?

15. Voronq en owaspi top 10 security vulnerabilitynere ev est dzez inchpes en azdum web application-i vra?


16. inch eq haskanum aselov cross platform server side runtime environment?

17. Qani vor xosecinq asynchronutyunic, kpatmeq te vonc e ashxatum event loope node.js-um.
Inch phasaner giteq?

18. vorn e tarberutyune blocking ev non-blocking code ev inchpes e ayn azdum aplication-i performace-ii vra?

19. inchi hamar en child processneric ev worker threadnere, ev vorn e himanak tarberutyune ays erku modulneri?

20. Vorn e streamneri aravelutyune fs modulei het hamematac? 

21. Inchpes e texi unenum error hundlinge node.jsum?

22. Ay orinak expresum inch tesaki middlewarener giteq, u inchov e tarbervum eror handling middlweare myus midlewareneric?
Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware


23. Inch tesaki db-ner eq ogtagorcel dzer naxord projectnerum? Vonc eq voroshum inch db ogtagorcel dzer application-i hamar?

24. Db optimization inch tarberakner giteq? 

25. sql injection-in canot eq? xusapelu hamar inch karogh enq ogtagorcel?

26. What are some common techniques for securing a database, and how do you ensure that sensitive data is protected?
















