const str: string = '    suyt fuuyf ytfuu vuuv    '
console.log(str.trim())
console.log(str.charAt(10))
console.log(str.indexOf('suyt'))
console.log(str.includes('4'))


const strr: string = 'นายjhjhjjh'

console.log (strr.includes('นาย'))
console.log(str.slice(3,8))


const strrr: string ='นายจิรพัฒน์ ทานนท์'

console.log(strrr.slice(strrr.indexOf('จิรพัฒน์'),strrr.indexOf('จิรพัฒน์') + "จิรพัฒน์".length))



const sty: string = 'นายจิรพัฒน์ ทานนท์ ไม่อยากใช้อารมร์นำพา เลยใช้เวลาอยู่กับตัวเอง'

console.log(sty.replace('จิรพัฒน์', 'ไม่ทราบนามสกุล'))

function getPrefix(fName: string) {
    if(fName.includes('นาย')){
    return 'นาย'
    }else if(fName.includes('น.ส')){
        return 'น.ส'
    } else {
        return'_'
    }
    
} 
console.log(getPrefix('นาย จิรพฒน์ ทานนท์')) 