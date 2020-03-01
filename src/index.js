//  这两个导入的时候成员名称必须写

import React from 'react';  //  创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom';   //  把创建好的组件和虚拟DOM放到页面中

//  创建虚拟DOM

// const myh1 = React.createElement('h1', { title: '啊,五环', id: 'myh1'}, '这是一个h1')


// const div1 = React.createElement('div', null, '这是一个div', myh1);
//  使用react-dom把虚拟DOM渲染到页面中


//  HTML 是最优秀的标记语言
//  注意: 在js文件名中,默认不能写这种类似 HTML 的标记;否则打包会失败
//  可以使用babel来转换这些 js 中的标签
//  在JS 中,混合写入类似 HTML 的语法,叫做JSX语法,符合XML的JS

//  当我们需要在 JSX 控制的区域中去使用 js 代码 需要加入 {} 的形式
let num = 100;
let str = '你好,世界';
let boo = true ? '对' : '错'

const arrItem = ['莫埃利', '克莱', '斯蒂夫'];

const arr = [];
arrItem.forEach((item, index) => {
    const temp = <h1 key={index}>{item}</h1>
    arr.push(temp);
})

//  数组的 map 方法

const result = arrItem.map((item, index) => {
    return <h1 key={index}>{item}</h1>
})

console.log(result)

const myDiv =
    <div id="myDiv" tiile="这是一个div">
        {num + 100}{str}{boo}
        <hr/>
        <div>{result}</div>
        { arrItem.map((item, index) => <h5 key={index}>{item}</h5>) }
    </div>


ReactDOM.render(myDiv, document.getElementById('app'));

//  Target container is not a DOM element 第二个参数应该是一个DOM元素


//  vue 的写法
// const vm = new Vue({
//     data: {},
//     el: '#app',
//     methods: {}  //  迈森克斯
// })