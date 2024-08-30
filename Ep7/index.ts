const score: number = [10, 23, 26, 30, 33] 
    
    let sum; number = 0
    
    for (let i = 0; i < score.length; i++) {
        sum = sum + score[i]
  
  }
  let avg = sum / score.length
console.log("total: ",sum)
console.log("Avg: ",avg)




const mystudents: string = "ซ,ท,ว,ร,ฐ,ส"
const mystudentsArray : string[] = mystudents.split(',')

console.log(mystudents)
console.log(mystudentsArray[1])




const fullName: string = 'สวบข้าว แดกเส้น'

console.log(fullName.split('')[0])
console.log(fullName.slice(0, fullName.indexOf('')))





const ani: string = 'หมา*กับแก้*เสือ*กะปอม'
const aniArray : string[] = ani.split('*')

console.log(ani)

console.log(aniArray)

console.log("ตั้งต้น: ",aniArray)

aniArray.pop()
console.log("เอาตัวสุดท้ายออก: ", aniArray)

aniArray.push('ตุ๊ดตู่')
console.log("ใส่ต่อท้าย: ", aniArray)

aniArray.shift()
console.log("เอาตัวหน้าออก: ", aniArray)

aniArray.unshift("เหี้ย")
console.log("ใส่ตัวหน้า ", aniArray)




const nickname: string = 'แทน,แมน,แซน,แพน'
const nicknameArray: string[] = nickname.split(',')

nicknameArray.sort()
console.log("เรียง ก-ฮ: ",nicknameArray)

nicknameArray.reverse()
console.log("เรียง ฮ-ก: " ,nicknameArray)


const me = {
    firsName: 'จิรพัฒน์',
    lastName: 'ทานนท์',
    age: 19,
    phoneNumber: '0945050212',
}

// ประวัติส่วนตัว

//ชื่อ: จิรพัฒน์
//นามสกุล: ทานนท์
//อายุ 19
//หมายเลขโทรศัพท๋