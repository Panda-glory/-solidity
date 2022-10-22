//如果是一个普通类型，在赋值过程中，改变类型是不被允许的
//但如果是any类型，则允许被赋值为任意类型
// let num: number =9527
// console.log(num, typeof num)
// num = 0x2537
// console.log(num, typeof num)
//不能boll赋值给number，但是可以改
// num = true
// console.log(num,typeof num)

// let num: any = 9527
// console.log(num,typeof num)
// num = 0x2537
// console.log(num,typeof num)
// num = true
// console.log(num,typeof num)


// let a: string = "Hello,TypeScript!"
// //没有这个值就是undefined，没赋值则是null
// console.log(a.name)

//不能从一个undefined中读属性
// let a: any = "Hello,TypeScript!"
// console.log(a.name)
// console.log(a.name.firstName);

// let a
// a = 9527
// console.log(a,typeof a)
// a ="Hello，Typescript!"
// console.log(a, typeof a)

// let a = 9527
// console.log(a,typeof a)
// a = 'test'
// console.log(a,typeof a)

//any可以访问任何属性和方法
// let a 
// a = true
// a.print()

let a: any = false
console.log(a.name,typeof a.name)