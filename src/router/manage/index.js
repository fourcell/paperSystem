const Manage = [
    {
        path: "/manage",
        component: ()=> import('../../pages/manage'),
        children:[
            {
                path:'home',
                name:'home',
                component:()=>import('../../pages/manage/home'),
                meta:{
                    title:'首页'
                },
            },
            {
                path:'personalMessage',
                name:'personalMessage',
                component:()=>import('../../pages/manage/personal-message'),
                meta:{
                    title:'个人信息'
                },
            },
            {
                path:'addUser',
                name:'addUser',
                component:()=>import('../../pages/manage/add-user'),
                meta:{
                    title:'添加用户'
                },
            },
            {
                path:'dataAnalyze',
                name:'dataAnalyze',
                component:()=>import('../../pages/manage/data-analyze'),
                meta:{
                    title:'数据分析'
                },
            },
            {
                path:'configData',
                name:'configData',
                component:()=>import('../../pages/manage/config-data'),
                meta:{
                    title:'设置数据'
                },
            },
            {
                path:'selectCondition',
                name:'selectCondition',
                component:()=>import('../../pages/manage/select-condition'),
                meta:{
                    title:'选题情况'
                },
            },
            {
                path:'controlProgress',
                name:'controlProgress',
                component:()=>import('../../pages/manage/control-progress.vue'),
                meta:{
                    title:'控制进度'
                },
            },
    ]
    }
]
export default Manage