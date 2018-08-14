function Stack() {
    this.storage = '';
    this.capacity = 20;
    this.size = 0
}

Stack.prototype.push = function (value) {
    if (!value) {
        return 'Please enter a value'
    }
    if (this.size > this.capacity) {
        return 'capacity full'
    }
    this.storage += '-' + value;
    return ++this.size
}
Stack.prototype.pop = function (value) {
    if (!this.size) {
        return 'the storage is empty'
    }
    let index = this.storage.lastIndexOf('-');
    let lastEntry = this.storage.slice(index + 1)
    this.storage = this.storage.slice(0, index);
    this.size--
    return lastEntry
}


let foodStack = new Stack()
foodStack.push('eggs')
foodStack.push('bacon')
foodStack.push('chicken')
foodStack.push('potatos')
foodStack.push('green beans')
foodStack.push('apples')
foodStack.push('avacado')
foodStack.push('almond')
foodStack.push('buritto')
foodStack.push('carrots')
foodStack.push('enchilada')
foodStack.push('grapes')
foodStack.push('Graham crackers')
foodStack.push('ice cream')
foodStack.push('Indian food')
foodStack.push('ketchup')
foodStack.push('ginger')
foodStack.push('corn')
foodStack.push('Toast')
foodStack.push('Spaghetti')
// console.log(foodStack)

let numberStack = new Stack()
numberStack.push(1)
numberStack.push(2)
numberStack.push(3)
numberStack.push(4)
numberStack.push(5)
numberStack.push(6)
numberStack.push(7)
numberStack.push(8)
numberStack.push(9)
numberStack.push(10)
numberStack.push(11)
numberStack.push(12)
numberStack.push(13)
numberStack.push(14)
numberStack.push(15)
numberStack.push(16)
numberStack.push(17)
numberStack.push(18)
numberStack.push(19)
numberStack.push(20)
// console.log(numberStack)

let popUpPencilStack = new Stack()
popUpPencilStack.push('lead 1')
popUpPencilStack.push('lead 2')
popUpPencilStack.push('lead 3')
popUpPencilStack.push('lead 4')
popUpPencilStack.push('lead 5')
popUpPencilStack.push('lead 6')
popUpPencilStack.push('lead 7')
popUpPencilStack.push('lead 8')
popUpPencilStack.push('lead 9')
popUpPencilStack.push('lead 9')
popUpPencilStack.push('lead 10')
popUpPencilStack.push('lead 11')
popUpPencilStack.push('lead 12')
popUpPencilStack.push('lead 13')
popUpPencilStack.push('lead 14')
popUpPencilStack.push('lead 15')
popUpPencilStack.push('lead 16')
popUpPencilStack.push('lead 17')
popUpPencilStack.push('lead 18')
popUpPencilStack.push('lead 19')
popUpPencilStack.push('lead 20')
console.log(popUpPencilStack)
