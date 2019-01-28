// 队列

class Queue {
    // 属性
    items: Array<number>;
    //  构造函数
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item)
    }
    dequeue() {
        return this.items.shift();
    }
    head() {
        return this.items[0];
    }
    tail() {
        return this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length == 0;
    }
    clear() {
        this.items = [];
    }
}

// 约瑟夫环问题： 有一个数组存放了100个数据0-99，要求每隔两个数删除一个数，到末尾时再循环至开头继续进行，求最后一个被删除的数字。

var arr = [];
for (var i = 0; i < 100; i++) {
    arr.push(i);
}
function delRang(arr) {
    // 实例
    var queue = new Queue();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        queue.enqueue(i);
    }

    var index = 0;
    while (queue.size() !== 1) {
        var item = queue.dequeue();

        index += 1;

        if (index % 3 !== 0) {
            queue.enqueue(item);
        }
    }

    console.log(queue.head());

    return queue.head();
}

delRang(arr);