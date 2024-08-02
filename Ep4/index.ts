function data(dayOfWeek: number ) {
    if (dayOfWeek ===1) 
    console.log ('สวัสดีวันจันทร์')
        if (dayOfWeek ===1) {
    console.log ('สวัสดีวันอังคาร')
    } if (dayOfWeek ===1) {
    console.log ('สวัสดีวันพุธ')
    }if (dayOfWeek ===1) {
    console.log ('สวัสดีวันพฤหัดสับดี')
    }if (dayOfWeek ===1) {
    console.log ('สวัสดีวันศุกร์')
    }if (dayOfWeek ===1) {
    console.log ('สวัสดีวันเสาร์')
    }if (dayOfWeek ===1) {
    console.log ('สวัสดีวันอาทิตย์')
    }
    
}

function seyhi(dayOfWeek: number ) {
    switch (dayOfWeek) {
    case 1: 
        console.log ('สวัสดีวันอาทิตย์')
        break
    case 2:
        console.log ('สวัสดีวันจันทร์')
        break
    case 3: 
        console.log ('สวัสดีวันอังคาร')
        break
    case 4:
    console.log ('สวัสดีวันพุธ')
    break
    case 5:
      console.log ('สวัสดีวันพฤหัดสับดี')
      break
      case 6:
      console.log ('สวัสดีวันศุกร์')
      break
      case 7:
      console.log ('สวัสดีวันเสาร์')
      break
default: 
        console.log ('Eeeee')
        break
}

}

function size(size: string ) {
    switch (size) {
        case ('s'):
        console.log ('ผอม')
        break
        case ('m'):
        console.log ('ผอม')
        break
        case ('l'):
        console.log ('ท้อม')
        break
        case ('xl'):
        console.log ('อ้วน')
        break 
        case ('2xl'):
        console.log ('อ้วน')
        break
        default: 
        console.log ('Eeeee')
        break
    }
}

size('c')

function fgg(u: number, digit: number){
    const x = u.toFixed(digit) //  digit = จำนวนของทศนิยม toFixed = เพิ่มจำนวนทศนนิยม
    return x
    
}

console.log(fgg(40,6))

function num(n: number) {
    const x = n.toLocaleString() // เพิ่มจุลภาค (comma) (,)
    return x
}
console.log(num(10000000000000))

const str: string = " super "

console.log(str.length) // length = จำนวนตัวอักษร
console.log(str.charAt(4)) // charAt = ดึงตัวอักษร
console.log(str.trim()) // trim = นำออก
console.log(str.toUpperCase()) // toUpperCase = พิมใหญ่
console.log(str.toLowerCase()) // oLowerCase = พิมเล็ก

function checkStringLength(c: string ) {
    return c.length
}

console.log('Saiber')

function mail(q: string, g: number) {
   return q.charAt(g)
}
console.log (mail('spectre' ,0))

const str: string = 'กลับบ้านนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนน'
console.log(str.indexOf('น')) // indexOf = หาตำแหน่งตัวอักษร
console.log(str.includes('น')) // includes = หาคำ

function sp(w: string, f: string ) {
    if (w.includes(f) === true) {
console.log(w.indexOf(f))
    }else (console.log('ไม่พบคำค้นหา'))
   
}
sp('ไม่อยากใช้อารมณ์นำพาเลยใช้เวลาอยู่กับตัวเอง' , 'ตัวเอง')