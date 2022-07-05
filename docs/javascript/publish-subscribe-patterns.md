
### 发布-订阅模式

``` javascript
class PubSub{
  constructor(){
    this.events = {}
  }

  // 订阅方法

  subscribe(type, cb){
    if(!this.events[type]){
      this.events[type] =[]
    }
    this.events[type].push(cb)
  }
  
  // 发布方法

  publish(type, ...args){
    if(this.events[type]){
      this.events[type].forEach(cb => cb(...args))
    }
  }

  // 取消某个订阅

  unsubscribe(type, cb){
    if(this.events[type]){
      const cbIndex = this.events[type].findIndex(e => e ===cb)
      if(cbIndex != -1){
        this.events[type].splice(cbIndex,1)
      }
    }
    if(this.events[type].length === 0){
      delete this.events[type];
    }
  }

  // 取消所有订阅

  unsubscribeAll(type){
    if(this.events[type]){
      delete this.events[type]
    }
  }
  
}


let pubSub = new PubSub();

// A订阅了SMS事件
pubSub.subscribe('SMS', console.log);

// B订阅了SMS事件
pubSub.subscribe('SMS', console.log);

// C发布SMS事件
pubSub.publish('SMS', 'I publishing SMS event');


```


发布订阅模式相比观察者模式多了个事件通道，事件通道作为调度中心，管理事件的订阅和发布工作，隔绝了订阅者和发布者的依赖关系。订阅者在订阅事件的时候，只关注事件本身，不必关心谁会发布这个事件；发布者在发布事件的时候，只关注事件本身，不用关系谁订阅了这个事件。


### 观察者模式


``` javascript

class Subject {

  constructor(){
    this.observers = []
  }
  add(observer){
    this.observers.push(observer);
  }
  notify(...args){
    this.observers.forEach(observer => observer.update(...args));
  }
}


class Observer {

  update(...args){

    console.log(...args)
  }
}

// 创建观察者ob1
let ob1 = new Observer();

// 创建观察者ob2
let ob2 = new Observer();

// 创建目标sub

let sub = new Subject();

sub.add(ob1);

sub.add(ob2);

sub.notify(' I fired SMS event');


```

观察者模式有个重要的角色，及目标和观察者，在目标和观察者之间是没有事件通道的，一方面，观察者要想订阅目标事件，由于没有事件通道，因此必须将自己添加到目标中进行管理；另一方面，目标在触发事件的时候，也无法将通知操作委托给事件通道，因此只能亲自去通知所有观察者；


从代码实现来看，发布-订阅模式是面向调度中心编程的，而观察者模式则是面向目标和观察者编程的。前者用于解耦发布和订阅者，后者用于耦合目标和观察者