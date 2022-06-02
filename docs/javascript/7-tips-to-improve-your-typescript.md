# 提升typescript的7个技巧

- 泛型
- 模板字面量
- 实用程序类型
- KeyOf/TypeOf运算符
- 条件类型
- 映射类型
  

学习示例
``` javascript

type Todo = {
  text:string,
  type:"very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean 
}

```

## 泛型

泛型的主要目的是提供可重用性

``` javascript

type Todo = {
  text:string,
  type:"very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean 
}


```
没有使用泛型，每个属性都有自己定义的类型

使用了泛型：
``` javascript

type FirstTodo<T> = {
  text: T,
  type:"very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean 
}
```

T是什么意思？
提供的T是三角括号定义类型和文本具有相同的T类型

例如：我们为text属性提供一个字符串类型

``` js

const firstTodo: FirstTodo<string> = {
  text:'first todo',
  type:'urgent',
  daysToFinish:6,
  isFinished:false
}
```

现在为每个属性添加泛型：

``` js 
type SecondTodo<S,T,N,B> = {

  text:S,
  type:T,
  daysToFinish:N,
  isFinished:B
}

type TypeOptions = "very urgent" | "urgent" | "not urgent"

const secondTodo:SecondTodo<string, TypeOptions, number, boolean> = {
  text:"first todo",
  type:"urgent",
  daysToFinish:6,
  isFinished:false
}

```

如果B设置的不是boolean而是一个number类型，那么isFinished应该是number

## 模板字面量

与js的工作方式非常类似

``` js
type UrgencyRate = "very " | "" | "not "

type ThirdTodo<T> = {
  text:T,
  type:`${UrgencyRate}urgent`,
  daysToFinish:number,
  isFinished:boolean
}

const thirdTodo:ThirdTodo<string> ={
  text:"third todo",
  type:"not urgent",
  daysToFinish:6,
  isFinished:false
}

```

## 索引访问类型

使用索引访问，可以通过将一个或一些属性名称放在方括号中来创建一种可以访问另一种类型的属性类型

```js
type Todo = {
  text:string,
  type:"very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean
}

type TodoText = Todo["text"]

type TodoTextAndIsFinished = Todo["text" | "isFinished"]


```

使用 keyOf运算符获取1个元素的所有属性类型

``` js
type AllTypes = Todo[keyof Todo] // string | number | boolean

```

使用typeOf 操作符可以得到类型

``` js 
typeof "todo" // string
```


根据当前元素创建新类型的方式：

``` js
const forthTodo: Todo = {
  text:"forth todo",
  type:"not urgent",
  daysToFinish:6,
  isFinished:false
}

type AllTodoTypes = typeof forthTodo


/**
type AllTodoTypes = {
  text:string,
  type:"very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean
}

*/


```

## 实用程序类型

6种实用程序类型，Required、Readonly、Partial、Record、Pick、Omit和NonNulllable

Readonly 不允许从外部更改对象

``` javascript

type Todo = {
  text:string,
  type: "very urgent" |"urgent" | "not urgent",
  daysToFinish: number,
  isFinished: boolean
}

const fifthTodo:Readonly<Todo> ={
  text:"fifth todo",
  type:"not urgent",
  daysToFinish:6,
  isFinished:false
}

fifthTodo.text = 'new Text' // Cantnot assign to 'text' because it is a read-only property.
```

必需与部分 (Required和Partial)

``` js

type Todo = {
  text: string,
  type: "very urgent" |"urgent" | "not urgent",
  daysToFinish: number,
  isFinished: boolean
}

const todoWithRequired: Required<Todo> = {
  text: "todo",
  type:  "not urgent",
  daysToFinish: 10,
  isFinished: true
}

const todoWidthPartial: Partial<Todo> ={
  type:"todo",
  type:"very urgent"
}

```

记录(Record)是一个构造函数，有助于创建一个新类型作为属性和类型的对象

``` javascript

type TodosText = "first todo" | "second todo"

type TodoDescription = {
  type: "very urgent" |"urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean
}

const todo:Record<TodosText, TodoDescription> ={
   "first todo":{
     type:"not urgent",
     daysToFinish:10,
     isFinished:false
   },
   "second todo":{
     type:"urgent",
     daysToFinish:0,
     isFinished:false
   }
}

```

Pick 和 Omit(Pick vs Omit)

通过选择或省略属性来创建新类型。

``` js
type Todo = {
  text: string,
  type: "very urgent" |"urgent" | "not urgent",
  daysToFinish: number,
  isFinished: boolean
}

type TodoWidthPick = Pick<Todo,"text" | "isFinished">

const todoPick:TodoWidthPick = {
  text:"todo",
  isFinished:true
}

type TodoWidthOmit = Omit<Todo,"isFinished">

const todoOmit:TodoWidthOmit = {
  text:"todo",
  type:"not urgent",
  daysToFinish:23
}


```

NonNullable 通过从初始类型中排除undefined和null来创建新类型

``` js
type PossibleNullishTodo = {
  text: string,
  type: "very urgent" |"urgent" | "not urgent",
  daysToFinish: number,
  isFinished: boolean
} | null | undefined

type NotNullishTodo = NonNullable<PossibleNullishTodo>

// type NotNullishTodo = {
//   text: string,
//   type: "very urgent" |"urgent" | "not urgent",
//   daysToFinish: number,
//   isFinished: boolean
// }

```

## 条件类型

条件类型旨在定义类型之间的关系

``` js

type Todo = {
  text: string,
  type: "very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean
}

interface UrgentTodo extends Todo {
  type:"very urgent"
}


type ConditionalType = UrgentTodo extends Todo?true:false // true


```

## 映射类型

映射类型是在其他类型的基础上创建的，有助于避免重复代码，让我们为每个属性添加只读属性，并在映射时使其成为可选

``` js
type Todo = {
  text: string,
  type: "very urgent" | "urgent" | "not urgent",
  daysToFinish:number,
  isFinished:boolean
}

type CustomType<Type> = {
  readonly [Property in keyof Type] ?: Type[Property];
}

type ReadonlyPerson = CustomType<Todo>

//type ReadonlyPerson = {
   //readonly text?: string | undefined;
   //readonly type?: "very urgent" | "urgent" | "not urgent" | undefined;
   //readonly daysToFinish?: number | undefined;
   //readonly isFinished?: boolean | undefined;
// }


````