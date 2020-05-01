<template>
    <el-main>
        <div class="box-card">
            <div class="img">
                <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt/>
            </div>
            <div class="log">
                <template>
                    <div class="title">
                        <p>用户登录</p>
                        <p>UserLogin</p>
                    </div>
                    <el-form ref="form" :model="formData" :rules="rules" label-width="0px">
                        <el-form-item prop="name">
                            <el-input v-model="formData.name" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                    type="password"
                                    v-model="formData.password"
                                    autocomplete="off"
                                    placeholder="请输入密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <template>
                                <div class="botton">
                                    <el-button type="primary" @click="submitForm">登录</el-button>
                                    <el-radio v-model="formData.radio" label="1">学生</el-radio>
                                    <el-radio v-model="formData.radio" label="2">老师</el-radio>
                                    <el-radio v-model="formData.radio" label="3">管理员</el-radio>
                                </div>
                            </template>
                        </el-form-item>
                    </el-form>
                </template>
            </div>
        </div>
    </el-main>
</template>
<script>
	// const axios = require('axios');
    export default {
        data() {
            return {
                formData: {
                    name: "",
                    password: "",
                    radio: "1"
                },
                rules: {
                    name: [{required: true, message: "请输入账号", trigger: "blur"}],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}]
                }
            };
        },
        methods: {
            //表单校验
            submitForm() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.toLog();
                    } else {
                        return false;
                    }
                });
            },
            //登录 接口请求
            toLog() {
                let str="localhost:7070/";
                let userId;
                let url;
                let typeId;
				
                if (this.formData.radio == 1) {
                    str = "student";
                    userId = "stuId";
                    url = "/student/home";
                    typeId = 0;
                }
                if (this.formData.radio == 2) {
                    str = "teacher";
                    userId = "teacherId";
                    url= "/teacher/home";
                    typeId = 1;
                }
                if (this.formData.radio == 3) {
                    str = "administrator";
                    userId = "id";
                    url = "/manage/home";
                    typeId = 2;
                }
				var that=this;
                this.axios.get("/" + str + "/login?" + userId + '=' + this.formData.name + '&password='
                    + this.formData.password).then(
                     (res) =>{
                        if ("success" == res.data) {
                            that.$router.push({
                                path: url,
                                query:{
                                name:name
                            }});
                            window.localStorage.setItem("type", typeId);
                            window.localStorage.setItem('userId',this.formData.name)
                        } else if (res.data == "failed") {
                            confirm("账号或密码错误，请重新输入！");
                            location.reload();
                        } else {
                            confirm("账号不存在！");
                            location.reload();
                        }
                    }
                );
            }
        },
    };
</script>
<style lang="scss" scoped>
    main {
        position: relative;
        background-color: #60b3e4;
        display: flex;
        justify-content: center;
        align-items: center;

        .box-card {
            width: 760px;
            height: 350px;
            box-sizing: border-box;
            display: flex;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid #ccc;
            background-color: #fff;

            .img {
                width: 250px;
                height: 100%;

                img {
                    width: 250px;
                    height: 349px;
                    display: inline-block;
                }
            }

            .log {
                flex: 1;
                padding: 0 65px;

                input {
                    width: 385px;
                }

                .title {
                    display: flex;
                    align-items: center;
                    height: 90px;

                    p:nth-child(1) {
                        font-size: 24px;
                        color: #b7883e;
                    }

                    p:nth-child(2) {
                        font-size: 16px;
                        color: #dfe0e0;
                        text-indent: 10px;
                    }
                }

                .botton {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    button {
                        width: 125px;
                    }
                }
            }
        }
    }
</style>