/**
 * 将一个联合类型断言为其中一个类型
 */
 
 //类型断言(Type Assertion)可以用来手动指定一个值的类型。语法:值as类型或<类型>值
 //若A兼容B，那么A能够被断言为B，B也能被断言为A。
 //·联合类型可以被断言为其中一个类型
 //·父类可以被断言为子类
 //·任何类型都可以被断言为any
 //any可以被断言为任何类型
 
interface Cat {
    name: string;
    run(): void;
}

class CCat implements Cat {
    public name: string;

    run(): void {
        console.log(`${this.name} is running`)
    }
}

interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) :string {
    return animal.name;
}

let cat: Cat = {
    name: "BigG", 
    run: ():void => {console.log(`${getName(cat)} is running!`)}
}

cat.run()

// function isFish(animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }

// console.log(`isFish = ${isFish(cat)}`)

//类型断言
// function isFish(animal: Cat | Fish) {
//     if (typeof (animal as Fish).swim === 'function') {
//         return true;
//     }
//     return false;
// }

// console.log(`isFish = ${isFish(cat)}`)


// let cCat: CCat = new CCat();
// // console.log(typeof cat)
// console.log(cCat instanceof CCat)

/**
 * 将一个父类断言为更加具体的子类
 */
// 有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），接口是一个类型，不是一个真正的值
class ApiError extends Error {
    code: number = 0;
}

class HttpError extends Error {
    statusCode: number = 200;
}

let apiError = new ApiError()

function isApiError(error: Error) {
    console.log(error instanceof Error)
    console.log(error instanceof HttpError)
    console.log(error instanceof ApiError)
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}

console.log(`isApiError = ${isApiError(apiError)}`)


// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// function isHttpError(error: Error) {
//     console.log(typeof (error as HttpError).statusCode)
//     if (typeof (error as HttpError).statusCode === 'number') {
//         return true;
//     }
//     return false;
// }

// console.log(`isApiError = ${isApiError(apiError)}`)
// console.log(`isHttpError = ${isHttpError(apiError)}`)






/**
 * interface assertion
 */
// interface ApiError extends Error {
//     code: number;
// }

// interface HttpError extends Error {
//     statusCode: number;
// }

// let apiError: ApiError = {
//     code: 0,
//     name: "",
//     message: ""
// }

// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }

// isApiError(apiError)


// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// console.log(`isApiError = ${isApiError(apiError)}`)





/**
 * 将任何一个类型断言为 any
 * &
 * 将 any 断言为一个具体的类型
 */

// let x = "Hello, TypeScript!"
// console.log(x, typeof x);

// (x as any) = 1
// console.log(x, typeof x);

// (x as string) = "CUIT CBI"
// console.log(x, typeof x)