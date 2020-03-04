//  这两个导入的时候成员名称必须写

import React from 'react';  //  创建组件 虚拟DOM 生命周期
import ReactDOM, { render } from 'react-dom';   //  把创建好的组件和虚拟DOM放到页面中

// 第一种创建组件的方式
function Hello() {
    return <h1>我是hello</h1>
}

ReactDOM.render(
    <div>
        { /* 直接把组件以标签的形式 */ }
        <Hello></Hello>
    </div>
)