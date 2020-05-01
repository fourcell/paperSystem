export const Administrator = [
    {
        title: "个人信息",
        path: "/manage/personalMessage"
    },
    {
        title: "添加用户",
        // path: "/manage/addUser",
        children: [
            {
                title: '学校管理',
                path: "/456"
            },
            {
                title: '系别管理',
                path: "/56"
            },
            {
                title: '老师管理',
                path: "/89"
            },
            {
                title: '学生管理',
                path: "/manage/addUser"
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