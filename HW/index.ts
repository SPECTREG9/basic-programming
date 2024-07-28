function bmi(weight: number, height: number) {
    let bmi: number = (weight / (height * height))

if (bmi > 30.0) {
    return 'dangerous Obesity'
} else if (bmi > 25.0) {
    return 'Obesity'
} else if (bmi > 23.0) {
    return 'over Weight' 
} else if (bmi > 18.5) {
    return 'slim'
} else 
    return 'lower Weight'
} 

console.log(75/(1.76**2))
console.log(bmi(75,1.76))