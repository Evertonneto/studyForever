const Product = function (name, price, stock) {
    this.name = name
    this.price = price

    let stockPrivate = stock

    Object.defineProperty(this,'stock',{
        enumerable:true,
        configurable:true,
        get: () => {
            return stockPrivate
        },
        set: (value) =>{
            if(typeof value !== 'boolean'){
                throw new TypeError("The value should be false or true")
            }
            stockPrivate = value
        }
    })
}

const box = new Product('Box',"R$10",true)
console.log(box.stock)
box.stock = false
console.log(box.stock)

function house(size,color) {
    return{
        get size(){
            return size
        },
        set size(value){
            size = value
        },
        get color(){
            return color
        },
        set color(value){
            color = value
        }
    }
}

const house1 = house(62,'blue')
console.log(house1.size)
house1.size = 72
console.log(house1.size)
house1.color = 'gray'
console.log(house1.color)