// abstract class  Shape {
//  abstract perimeter() :number;
//  abstract sidesCount() :number;
//  abstract draw(): string
// }

// class Square extends Shape {
//         constructor(public sideSize:number) {
//             super() 
//         }
//      perimeter(): number {
//          return 4 * this.sideSize
//      }
//      sidesCount(): number {
//          return 4
//      }
//      draw (): string {
//          return "Square!"
//      }
// }

// class Triangle extends Shape {
//     constructor(public a:number,public b: number, public c :number) {
//         super()
//     }
//     perimeter(): number {
//         return this.a + this.b + this.c
//     }
//     sidesCount(): number {
//         return 3
//     } 
//     draw(): string {
//         return "Triangle"
//     }
// }

// class List<T> {
//     constructor(private values : Array <T> = []) {}
//     add(data:T) {
//         return this.values.push(data)
//     }

//     remove (data:T) :boolean{
//         if (this.values.indexOf(data)=== -1) {
//             return false
//         } else {
//         this.values.splice(this.values.indexOf(data),1)
//         return true
//         }
//     }

//     getValues() {
//         return this.values
//     }
// }

// const shapes = new List<Shape>();

//     shapes.add(new Square(4));
//     shapes.add(new Square(5))
//     shapes.add(new Triangle(3, 4, 5));
//     shapes.add(new Triangle(7, 4, 8));

//     // 1
//     shapes.getValues().forEach(shape => {
//         console.log('Shape:', shape.draw(), 'sides:', shape.sidesCount(), 'perimeter:', shape.perimeter());
//     });

//     // 2
//     // const squares = shapes.getValues.filter((item) => item.sidesCount() === 4);
//     // console.log(squares);

interface IWithIdentity {
    id:number
}


class User implements IWithIdentity {
    todoList:MyList<Todo> = new MyList<Todo>()
    constructor(public name:string, public id :number) {}
    
}

class Todo implements IWithIdentity {
    constructor(public title:string, public id :number) {}
}

class MyList<T extends IWithIdentity> {
    constructor(public values : T[] = []) {
    }

    add(data:T) {
        if(this.values.some((v)=> v.id !==data.id)) {
            this.values.push(data)
        }
    }

    findById(id:number): T | undefined {
        return  this.values.find((v) => v.id ===id)
    }

    deleteById(id:number) : boolean {
        if (this.values.some((v => v.id ===id))) {
            this.values = this.values.filter((item) => item.id !== id)
            return true
        } return false
    } 
    
}