const numer = [1, 2, 3, 4, 5]

function cTAS(array: number[]) {
    const result: string[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i].toString())
    }

    return result
}

function cTASM(array: number[]){
    return array.map(function(element,index) {
        return element.toString
    })
}

