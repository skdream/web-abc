# Promise 介绍与实现

## promise 是什么？有什么特点？

Promise 是一个异步编程解决方案，他可以看做是一个容器，保存某个未来才会结束的事件的结果。从语法上来说，Promise是一个对象，从它可以获取异步操作的消息，Promise提供统一的API,从代码上讲Promise是一个构造函数。

特点：
- 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending，fullfill,rejected。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
- 一旦状态改版，就不会再变，任何时候课可以得到这个结果。Promise对象的状态改变，只能有两种情况，从pending变为fulfilled和从pending变为rejected。