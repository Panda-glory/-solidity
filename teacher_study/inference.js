// 联合类型(Union Types)表示取值可以为多种类型中的一种。联合类型使用|分隔每个类型。
// 当TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。
// let s = "hello"
// console.log(s,typeof s);
// // console.log(typeof "Hello")
// s = 9527
// console.log(s,typeof s);
var a;
a = "hello";
console.log(a, typeof a);
a = 123;
console.log(a, typeof a);
