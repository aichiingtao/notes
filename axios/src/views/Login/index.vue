<script setup>
import {ref} from 'vue'
import {reactive} from 'vue'
import {ElMessage} from 'element-plus'
import {Apple} from '@/apis/index.js'
import {useRouter} from 'vue-router'

const router = useRouter()


const form = reactive({
  password: '',
  account: '',
  checked: false,
})


const rules = {
  account: [{
    // 是否必填
    required: true,
    //  提示语
    message: '请输入正确手机号',
    //  校验格式规则
    pattern: /^1\d{10}$/,
    trigger: 'blur',
  }],
  password: [
    {required: true, message: '密码不能为空',trigger: 'blur' },// 失去焦点是验证
    {min: 6, max: 8, message: '密码6-8位',trigger: 'change'},// 输入时校验长度
  ],


  // 自定义判断规则
  checked: [{
    validator: (rule, value, callback) => {
      // 表单的值： checked: true,
      if (value) {
        //  通知验证结果，
        callback()
      } else {
        callback(new
            //  消息提示
            ElMessage({
              message: '请勾选协议',
              type: 'success',
            })
        )
      }

    }
  }],
}

const login = () => {
  const {account, password} = form.valueOf()
  if (rules) {

    Apple(account, password)

    // 登录消息提示
    ElMessage({type: 'success', message: '登录成功'})

    //  跳转登录页面
    router.push('/')

  }
}


</script>

<template>


  <div class="layoutLogin">
    <h3>登录</h3>
    <el-form :model="form">
      <el-form-item :rules="rules">
        <el-input
            v-model="form.account"
            style="width: 240px"
            placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item :rules="rules">
        <el-input
            v-model="form.password"
            style="width: 240px"
            type="password"
            placeholder="请输入密码"
            show-password
        />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.checked" label="条款与协议" size="large"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">
          登录
        </el-button>
      </el-form-item>

    </el-form>

  </div>

</template>


<style scoped>
.layoutLogin {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  align-items: center;
}

</style>