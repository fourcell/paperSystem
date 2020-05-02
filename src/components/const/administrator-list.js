export const Administrator = [
    {
        title: "个人信息",
        path: "/manage/personalMessage"
    },
    {
        title: "管理系统",
        path: "/manage",
        children: [
            {
                title: '学校管理',
                path: "/manage/school"
            },
            {
                title: '系别管理',
                path: "/manage/department"
            },
            {
                title: '老师管理',
                path: "/manage/teacher"
            },
            {
                title: '学生管理',
                path: "/manage/student"
            },
        ]
    },
    {
        title: "数据分析",
        path: "/manage/dataAnalyze"
    },
    {
        title: "设置数据",
        path: "/manage/configData"
    },
    {
        title: "选题情况",
        path: "/manage/selectCondition"
    },
    {
        title: "控制进度",
        path: "/manage/controlProgress"
    },
]

export const Role = [
    {
        label: "学生",
        value: 0,
    },
    {
        label: "教师",
        value: 1,
    },
    {
        label: "管理员",
        value: 2,
    }
]

export const State = [
    {
        label: '开启',
        value: 1
    },
    {
        label: '关闭',
        value: 0
    },
]