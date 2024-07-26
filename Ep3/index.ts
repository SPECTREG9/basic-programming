function helloWorld() {
    console.log("สวัสดี")
 
 }
 
 helloWorld() // ไม่มี input ไม่มี output 
 
 function helloWorldName(name: string) {
     console.log(name)
 }
 
 helloWorldName('แทน') // มี input ไม่มี output 
 
 
 function getPi() {
     return 3.14
 }
 
 getPi
 
 console.log (getPi()) // ไม่มี input แต่มี output 
 
 
 function st(fName: string, sName: string) {
     
     if (fName === 'Mix' || sName === 'zane') {
         console.log('เริ่มสอน')
     } else {
         console.log('ไม่สอบ')
     }
           
 }
 
 st('mix', 'zane')
 
 function n(m: string, z: string, f: string) {
     if (m === 'mix' && z === 'zane' || f === "forth") {
         console.log ("พร้อมเรียน")
     } else {
         console.log ("ยังไม่พร้อม")
     }
 }
 
 n('mix', 'zane', "forth")
 
 
 function gg(gender: string, height: number, weight: number) {
     if (gender === 'man' && (height > 170 || (weight > 50 && weight <= 110))) {
         console.log ("จัยใบดำใบแดง")
     } else {
         console.log ("ไม่เข้าเกณฑ์")
     }
 }
 gg('man', 170, 110)
 
 function give10000(age: number, salary: number, deposit: number) {
    if (age >= 16 && salary < 70000 && deposit < 500000) {
        console.log ("free 10000฿")
    } else {
        console.log ("noooooo")
    }
}
give10000 (19, 1000000000, 7000000000000)