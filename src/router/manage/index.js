const Manage = [
    {
        path: "/manage",
        component: () => import('../../pages/manage'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../../pages/manage/home'),
                meta: {
                    title: '首页'
                },
            },
            {
                path: 'personalMessage',
                name: 'personalMessage',
                component: () => import('../../pages/manage/personal-message'),
                meta: {
                    title: '个人信息'
                },
            },
            {
                path: 'student',
                name: 'student',
                redirect: 'student/list',
                component: () => import('../../pages/manage/add-user/index.vue'),

                children: [
                    {
                        path: 'list',
                        name: 'list',
                        component: () => import('../../components/manage/add-user/components/addUser-list.vue'),
                        meta: {
                            title: '学生管理'
                        },
                    },
                    {
                        path: 'addUser',
                        name: 'addUser',
                        component: () => import('../../components/manage/add-user'),
                        meta: {
                            title: '修改学生信息'
                        },
                    }
                ]
            },
            {
                path: 'school',
                name: 'school',
                component: () => import('../../pages/manage/add-user/component/school.vue'),
                redirect: 'school/list',
                children: [
                    {
                        path: 'list',
                        component: () => import('../../components/manage/add-user/components/school-list.vue'),
                        meta: {
                            title: '学校管理'
                        },
                    },
                    {
                        path: 'update',
                        component: () => import('../../components/manage/add-user/components/school.vue'),
                        meta: {
                            title: '修改学校信息'
                        },
                    }
                ]
            },
            {
                path: 'department',
                name: 'department',
                component: () => import('../../pages/manage/add-user/component/department.vue'),
                redirect: 'department/list',
                children: [
                    {
                        path: 'list',
                        name: 'list',
                        component: () => import('../../components/manage/add-user/components/department-list.vue'),
                        meta: {
                            title: '系别管理'
                        },
                    },
                    {
                        path: 'update',
                        component: () => import('../../components/manage/add-user/components/department.vue'),
                        meta: {
                            title: '修改系别信息'
                        },
                    }
                ]
            },
            {
                path: 'teacher',
                name: 'teacher',
                redirect: "teacher/list",
                component: () => import('../../pages/manage/add-user/component/teacher.vue'),
                children: [
                    {
                        path: "list",
                        name: 'list',
                        component: () => import('../../components/manage/add-user/components/teacher-list.vue'),
                        meta: {
                            title: '老师管理'
                        },
                    },
                    {
                        path: 'update',
                        name: 'update',
                        component: () => import('../../components/manage/add-user/components/teacher.vue'),
                        meta: {
                            title: '修改老师信息'
                        },
                    }
                ]
            },
            {
                path: 'dataAnalyze',
                name: 'dataAnalyze',
                component: () => import('../../pages/manage/data-analyze'),
                meta: {
                    title: '数据分析'
                },
            },
            {
                path: 'configData',
                name: 'configData',
                component: () => import('../../pages/manage/config-data'),
                meta: {
                    title: '设置数据'
                },
            },
            {
                path: 'selectCondition',
                name: 'selectCondition',
                component: () => import('../../pages/manage/select-condition'),
                meta: {
                    title: '选题情况'
                },
            },
            {
                path: 'controlProgress',
                name: 'controlProgress',
                component: () => import('../../pages/manage/control-progress'),
                meta: {
                    title: '控制进度'
                },
            },
        ]
    }
]
export default Manage