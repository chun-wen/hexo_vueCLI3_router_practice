import Vue from 'vue'
import VueRouter from 'vue-router'
// 官方文件

import Home from '@/components/HelloWorld'  //Home 就是HelloWorld.vue 喔 ＠代表src
import Page from '@/components/pages/page'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
// 自定義的分頁元件

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/index',    //對應的虛擬路徑
            name: 'home',     //元件呈現的名稱
            component: Home  //對應元件
        },
        {
            path: '/page',    //對應的虛擬路徑
            name: '分頁',     //元件呈現的名稱
            component: Page,  //對應元件
            children:[
                {
                    path: '',         //如果沒有填入入境，元件child1預設會是主頁
                    name: 'child 1',    
                    component: child    
                }, 
                {
                    path: 'child2',      
                    name: 'child 2',     
                    component: child2    
                }, 
                {
                    path: 'child/:id',      
                    name: 'child 3',     
                    component: child3    
                }, 
            ]    
        },
    ]
});