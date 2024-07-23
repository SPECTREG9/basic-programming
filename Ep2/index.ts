function minus(a: number, b: number) {
    return a - b
}

console.log(minus(69, 96))

function kun(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}

console.log(kun(132, 68, 54, 664))



function หิว(หิวจริงไหม: boolean) {
    if (หิวจริงไหม === true) {
        console.log('หิววววว')
    }  else {
        console.log('ไม่หิววววว')
    }
}



function grade(homewoke: number, midtern: number, final: number) {
    let score: number = homewoke + midtern + final

    if (score < 50) {
        return 'grade F'
    } else if (score < 60) {
        return 'gradeD'
    } else if (score < 70) {
        return 'grade C'
    } else if (score < 80) {
        return 'grade B'
    }  else {
        return 'grade A'
    }
    

    }

    console.log(grade(25, 25, 35))


