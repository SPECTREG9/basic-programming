const database = [
    {email: 'GGEZ@gmail.com',
    password: 'lnwza007'
}
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length >= 8 && password.length <= 16) {
            const user = {
                email: 'GGEZ@gmail.com',
                password: 'lnwza007'
}
database.push(user)
alert('ผ่าน,ยินดีต้อนรับ ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16')
        }
    } else (
        alert('Email ไม่ถูกต้อง')
    )
}
register('GGEZ@gmail.com', 'lnwza007')


const database = [
    {
        email: 'GGEZ@gmail.com',
        password: 'lnwza007'
    },
    {
        email: 'God@gmail.com',
        password: 'lnwza888'
    }
]
function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (user[0].password === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรตตรวจสอบ')
        }

    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}
login('God@gmail.com', 'lnwza888')




// กฎการเข้าหรัส
//เปลี่ยน l เป็น +
// เปลี่ยน 0 เป็น ^
// เปลี่ยน z เป็น 9
const database = [
    {
        email: 'GGEZ@gmail.com',
        password: '+nw9a888'
    },
    {
        email: 'God@gmail.com',
        password: '+nw9a888'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+', 'l').replaceAll('^','0').replaceAll('9','z')
}


function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)
       
        if (realPassword === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรตตรวจสอบ')
        }

    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}
login('GGEZ@gmail.com', 'lnwza888')