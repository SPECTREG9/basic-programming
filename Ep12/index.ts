const numer = [1, 2, 3, 4, 5]

function cTAS(array: number[]) {
    const result: string[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i].toString())
    }

    return result
}

function cTASM(array: number[]) {
    return array.map(function (element, index) {
        return element.toString
    })
}

const names = ["John Doe", "Jane Smith", "Jack Brown"];
function cutNameWithMap(array: string[]) {
    return array.map(function (element, index) {
        const cutName = element.split(" ") // ['John', 'Doe']
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}

console.log(cutNameWithMap(names))





const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.getFullName())





const account = {
    name: 'ออมกับเทออออ',
    balance: 0,
    deposit: function (amount: number) {
        if (amount < 0) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log('ฝากเงินจำนวน' + amount + 'ยอดคงเหลือ' + this.balance)
    },
    withdraw: function (amount: number) {
        if (amount > this.balance) {
            console.log('เงินไม่พอ คุณมียอดเงินคงเหลือ' + this.balance)
            return
        }
        this.balance = this.balance - amount
        console.log('ถอนเงิน' + amount + 'ยอดคงเหลือ' + this.balance)
    }
}


// ts-node index.ts ใช่งานโปรแกรม