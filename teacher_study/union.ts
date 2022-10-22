// 联合类型(Union Types)表示取值可以为多种类型中的一种。联合类型使用|分隔每个类型。
// 当TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。
// function reverse(a: number | string) : number | string {
//     if (typeof a == "number") {
//         return parseInt(a.toString().split('').reverse().join(''))
//     } else {
//         return a.split('').reverse().join('')
//     }
// }

// // let reversedNumber = reverse(9527)
// // console.log(reversedNumber, typeof reversedNumber)

// let reversedString = reverse("Hello")
// console.log(reversedString, typeof reversedString)


function reverse(a: number | string | boolean) : number | string {
    return a.toString().split('').reverse().join('')
}

let reversedNumber = reverse(9527)
console.log(reversedNumber, typeof reversedNumber)

// let reversedString = reverse("Hello")
// console.log(reversedString, typeof reversedString)

// let reversedBoolean = reverse(true)
// console.log(reversedBoolean, typeof reversedBoolean)