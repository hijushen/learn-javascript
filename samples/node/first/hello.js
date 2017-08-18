// 'use strict';


function string2int(s){
    // var tmp = s.concat(',');
    // console.log(tmp);
    var tmp = s.split('');
    console.log(tmp)

    return tmp.reduce(function(p, q){
        return p*10 + q;
    })
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}


// first node program:
// console.log('Hello, world!');

// function add(x, y, f){
//     return f(x) + f(y);
// }

// console.log(add(1,2,Math.abs))


// var arr= [1,3,5,7,9];
// var rs = arr.reduce(function(x, y){
//     return x * y
// });

// console.log(rs);



// var items = [10, 120, 1000];

// // our reducer function
// var reducer = function add(sumSoFar, item) { return sumSoFar * item; };

// // do the job
// var total = items.reduce(reducer, items[0]);

// // function product(arr){
// //     return arr.reduce(reducer)
// // }

// function product(arr){
//     return arr.reduce(function(total, item){
//         return total * item
//     })
// }

// var p = product([1, 2, 3, 4]) , 
// q = product([0, 1, 2]),
// m = product([99, 88, 77, 66]);
// console.log(p, q, m);
// // console.log(typeof(product([0, 1, 2])))
// console.log(total); // 1130
// // console.log(q)
// // console.log(m)

// // 测试:
// if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
//     console.log('测试通过!');
// }
// else {
//     console.log('测试失败!');
// }



// function pow(x){
//     return x * x;
// }

// var array = [1,2,3,4,5,6,7,8,9];
// var rarray = array.map(pow)
// console.log(array)
// console.log(rarray)