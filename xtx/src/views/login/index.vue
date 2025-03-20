<script setup>
import {Umbrella} from '@/apis/login.js'
import {ref} from 'vue'
import {ElForm, ElInput, ElCheckbox, ElButton,ElMessage} from 'element-plus';
import 'element-plus/es/components/message/style/css'
//  调用router 方法  useRoute是调数据
import {useRouter} from 'vue-router'


const form = ref({
  account: '',
  password: '',
  agree: true,
})

const rules = {
  account: [
    {required: true, message: '用户名不能为空', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 4, max: 6, message: '密码长度4-6位', trigger: 'blur'}
  ],
  agree: [{
    //  自定义规则判断，
    validator: (rule, value, callback) => {
      console.log(value)
      if (value) {
        callback()
      } else {
        console.log('请勾选协议')
        callback(new Error('请勾选协议'))
      }
    }
  }],


}


const formRef = ref(null)
const router = useRouter()
const doLogin = () => {
  // 结构用户属于的账号密码
  const {account, password} = form.value
  formRef.value.validate(async (valid) => {
    // valid 所有的表单都通过校验，它才能位 true
    if (valid) {
      //  发送请求接口时，传递的参数
      const res = await Umbrella({account, password})
      console.log(res)
      // 提示用户登录成功
      ElMessage({type:'success',message:'登录成功'})
      // 跳转首页
      router.replace({path:'/'})
    }
  })
}


</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-tabs">
        <div class="active-tab">账户登录</div>
      </div>
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="account" style="margin-bottom: 20px;">
          <el-input v-model="form.account" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom: 20px;">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="form.agree">
            我同意条款
          </el-checkbox>
        </el-form-item>
        <el-button type="primary" class="login-button" @click="doLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
el-form-item {
  margin-bottom: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  list-style: none;
  text-decoration: none;
}

body {
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-container {
  width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-card {
  padding: 30px;
}

.login-tabs {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.login-tabs div {
  padding: 10px 20px;
  cursor: pointer;
}


.input-group input {
  width: 100%;
  padding: 10px 10px 10px 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.agreement-group a {
  color: #009966;
}


.login-button {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  background-color: #009966;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
