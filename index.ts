// // abstract class Shape {
// //    abstract  perimeter():number;
// //    abstract  sidesCount():number;  
// //      abstract draw ():string
// // }

// // class Square extends Shape {
// //      constructor(private sideLength:number) {
// //           super()
// //      }
// //      perimeter(): number {
// //          return 4*this.sideLength
// //      }
// //      sidesCount(): number {
// //          return 4
// //      }
// //      draw(): string {
// //          return "Square!"
// //      }
// // }

// // class Triangle extends Shape {
// //      constructor(private side1:number,private side2:number,private side3:number){
// //           super();
// //      }
// //      perimeter(): number {
// //          return this.side1+this.side2+this.side3
// //      }
// //      sidesCount(): number {
// //          return 3
// //      }
// //      draw(): string {
// //          return "Triangle!"
// //      }
// // }

// // class List <T> {
// //      private values:Array<T>
// //      constructor(data :T [] = []) {
// //           this.values=data
// //      }

// //      add(data:T) {
// //        this.values.push(data);
// //         return this.values;
// //      }
// // }

// // const shapes = new List<Shape>()
// // shapes.add(new Square(5))
// // console.log(shapes);


// // console.log(shapes);

// // // class Person {
// // //      name:string;
// // //     protected age:number;
// // // private stomach: string[] = []
// // //      constructor(name:string,age:number) {
// // //           this.name=name
// // //           this.age=age
// // //      }

// // //      eat(food:string):void {
// // //           if(this.stomach.length<10) {
// // //                this.stomach.push(food)
// // //           }
// // //      }

// // //      clear() {
// // //           this.stomach = []
// // //      }
// // // }

// // // let a = new Person("Karen",25)

// // // class Baby extends Person {
// // //      favoriteToy:string;
// // //      constructor(name:string,age:number,favoriteToy:string) {
// // //           super(name,age)
// // //           this.favoriteToy=favoriteToy
     
// // //      }
// // // play():string {
// // //      return `Playing with ${this.favoriteToy}`
// // // }    
// // // eat(food: string): void {
// // //     console.log("Baby");
// // //     super.eat(food)
    
// // // }

// // // }
// // // let b = new Baby("Mariam",77,"Arjik")


// // // abstract class Animal {
// // //      abstract walk(a:string) :void 
// // // }


// // // class Cat extends Animal {
// // //      walk(a:string): void {
// // //          console.log(a);
         
// // //      }
// // // }

// // // enum A {
// // //      All = 0,
// // //      BMW = 1,
// // //      None =2
// // // }
// // // console.log(A);


// // // function test(a:A) {
// // //      console.log(a);
     
// // // }

// // // console.log(A[0]);
// //---------------------------------------------------------------------
// //Typescript 3

// // interface Test {
// //      prop:string
// // }

// // class A   {
// //     prop!: string;
// //     constructor() {}
// //     setValue():void {
// //        //  this.prop = "pix"
// //     }

// //     getValue() :string {
// //          return this.prop
// //     }
// // }

// // function log <T>(prop :T) :T{
// //      return prop
// // }


// // log<number>(5)
// // log<string>("5")
// // log<boolean>(true)

// // function foo<T>(arr:T[]) :number{
// //      return arr.length
// // }


// // function foo<T extends Number>(arr:T[]) :number{
// //      return arr.length
// // }

// // class Num extends Number {}

// // foo<Num>([5])


// // interface A<T,K> {
// //      prop1:T
// //      prop2:K
// // }

// // class B implements A<number,string> {
// //      prop1: number;
// //      prop2: string;
// //      constructor() {
// //           this.prop1=4
// //           this.prop2="s"
// //      }
// // }

// // class Test<T>  {
// //      prop? :T;

// //      say():T {
// //           return this.prop!
// //      }
// // }

// // const test = new Test()
// // console.log(test.say())
// abstract class Shape {
//    abstract  periemeter():number
//    abstract  sidesCount():number
//    abstract  draw():void
// }

// class Square extends Shape {
//      constructor(public sidesSize:number){
//           super()
//      }
//      periemeter(): number {
//          return 4*this.sidesSize
//      }
//      sidesCount(): number {
//          return 4
//      }

//      draw(): void {
//          console.log("Square!")
//      }
// }

// class Triangle extends Shape {
//      constructor(public sideSize1 :number,public sideSize2 :number,public sideSize3 :number){
//           super()
//      }
//      periemeter(): number {
//          return this.sideSize1+this.sideSize2+this.sideSize3
//      }
//      sidesCount(): number {
//          return 3
//      }
//      draw(): void {
//          console.log("Triangle!");
         
//      }
// }

// class List<T extends Shape> {
//     constructor(private values : T[] = []) {         
//     }
//      add (data:T):T[] {
//           this.values.push(data)
//           return this.values 
//      }
//      remove(data:T) :Boolean{
//           if(!this.values.some((v)=> v ===data)) {
//                return false
//           }else {
//                this.values = this.values.filter(item => item ===data)
//           }
//           return true
//      }

//      static from <T extends Shape> (values:T[]) {
//           return new List <T> (values)
//      }
//      getValues():T[]{
//           return this.values
//      }
// }

// const shapes = new List<Shape>();

// shapes.add(new Square(4));
// shapes.add(new Square(5))
// shapes.add(new Triangle(3, 4, 5));
// shapes.add(new Triangle(7, 4, 8));


// shapes.getValues().forEach(shape => {
//     console.log('Shape:', shape.draw(), 'sides:', shape.sidesCount(), 'perimeter:', shape.periemeter());
// });


// const newShapes = List.from([
//      new Square(6),
//      new Triangle(3, 4, 5),
//  ]);
//  console.log(newShapes);

// const squares = shapes.getValues().filter((item) => item.sidesCount() === 4);
// console.log(squares);