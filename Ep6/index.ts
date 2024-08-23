console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i = 0; i <= 10; i++) {
    console.log(i)
}


let sum: number = 0
for (let i = 1; i <= 31; i++ ) {
    sum = sum + i
}

console.log('Total',sum)

let sum: number = 0
let i: number = 1

while (i <= 31) {
    sum = sum + i
    i++

}
console.log(sum)

let sum: number = 0
let i: number = 1

do {
    sum = sum + i
    i++
} while (i <= 31)
console.log('Total',sum)

let count: number = 0

while (true) {
    console.log("โสดวะหนังหมา")
    count++
    if (count  === 10)
    break
}

let age: number =0

for (let i = 1; i <= 19; i++ ) {
    age = age + i
    console.log("ฉันอายุ",i,"ปี")
}

let i: number =1
while (i <= 19) {
    console.log("ฉันอายุ",i,"ปี")
    i++
}

let a: number =1
do  {
    console.log("ฉันอายุ",a,"ปี")
    a++
} while (i <= 19)


    let car1: string = 'H'
let car2: string = 'S'
let car3: string = 'Y'
let car4: string = 'M'
let car5: string = 'T'

const cars: string [] = ['H','S','Y','M','T']

console.log(cars.length)
console.log(cars[0])
cars[2] = 'I'
console.log(cars[2])


const carss: string [] = ['H','S','Y','M','T']
let i: number = 0

for (let i = 0; i < carss.length; i++) {
    console.log(carss[i])
}

const cars: string[]=['Toyota','Honda','Suzuki','Yamaha','Nazda']
let i: number = 0

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha' ) {
        console.log('รถซื้อแกง จะไปแรงได้ไง')
    }
   
}

const f: string[]=['สส','สว','นายก','กกต','ปชช']

for (let i = 0; i < f.length; i++) {
    if (f[i] === 'นายก' ) {
        console.log('ไปกินหมูกะทะกัน')
    }

}

let num: number[] = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < num.length; i++) {
    if (num[i] === 3 || num[i] === 5 || num[i] === 7) {
        num[i] = 0
    }

}
console.log(num)

     