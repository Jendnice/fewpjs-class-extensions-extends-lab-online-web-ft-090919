// Your code here

class Polygon {

    constructor(arr) {
        this.arr = arr 
    }

    get countSides() {
        return this.arr.length 
    }

    get perimeter() {
        let sum = 0
        this.arr.forEach(s => {
            sum += s 
        })
        return sum 
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (this.arr.length === 3) {
            if (((this.arr[0] + this.arr[1]) > this.arr[2]) && ((this.arr[1] + this.arr[2]) > this.arr[0]) && ((this.arr[0] + this.arr[2]) > this.arr[1])) 
            {
                return true
            } else {
                return false 
            } 
        } else {
            return false 
        }
    }

}



class Square extends Polygon {
    
    get isValid() {
        if (this.arr.length === 4) {
            if ((this.arr[0] === this.arr[1]) && (this.arr[0] === this.arr[2]) && (this.arr[0] === this.arr[3]))
            {
                return true
            } else {
                return false 
            } 
        } else {
            return false 
        }
    }

    get area() {
        if (this.isValid) {
            return (this.arr[0] * this.arr[1])
        }
    }

}