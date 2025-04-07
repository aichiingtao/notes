<script setup>
import {ref} from 'vue'
import {reactive} from 'vue'
import {ElMessage} from 'element-plus'
import {Apple} from '@/apis/index.js'
import {useRouter} from 'vue-router'

const router = useRouter()

// 登录数据
const form = reactive({
  password: '',
  account: '',
  checked: false,
})

// 校验登录
const rules = {
  // 是否必填， 错误提示，验证格式，失去焦点即验证
  account: [{required: true, message: '请输入正确手机号', pattern: /^1\d{10}$/, trigger: 'blur',}],

  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},// 失去焦点时验证
    {min: 6, max: 8, message: '密码6-8位', trigger: 'change'},// 输入时校验长度
  ],


  // 自定义判断规则
  checked: [{
    validator: (rule, value, callback) => {
      // 表单的值： checked: true,
      if (value) {
        callback() //  返回验证结果通知
      } else {
        callback(new Error('请勾选协议'))
      }
    }
  }],
}

//  与form表单绑定，可以取出 rules 的校验结果，只要一个不通过，就会输出false
const formRef = ref(null)

// 登录
const login = () => {
  const {account, password} = form
  //  validate：校验数据是否校验通过
  formRef.value.validate((valid) => {
    if (valid) {
      Apple(account, password)
      // 登录消息提示
      ElMessage({type: 'success', message: '登录成功'})
      //  跳转登录页面
      router.replace('/')

    } else {
      //  提示简写
      ElMessage.error('登录失败')
    }
  })

}


const register = ref(false)
const addlogin = () => {
  register.value = true
}
const addlogin1 = () => {
  register.value = false

}

const Banana = reactive({
  account: '',
  password: '',
  password1: '',
  Verification: '',
  Graphical: '',
  Elephant: [855, 99, 86, 55],
  select: '86',
})


const rules1 = {
  account: [{
    required: true,
    message: '请输入正确手机号',
    trigger: 'blur',
    // 校验手机号格式
    pattern: /^1\d{10}$/,
  }],
  password: [{
    required: true,
    message: '请输入密码',
    trigger: 'blur',

  }, {
    required: true,
    message: '密码必须包含数字和字母',
    trigger: 'blur',
    pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/,
  },
    {
      min: 6,
      max: 8,
      trigger: 'blur',
      message: '密码长度6-8位',
    },
  ],
  password1: [
    {
      required: true,
      trigger: 'blur',
      message: '请再次输入密码',
    },

    {
      validator: (rule, value, callback) => {
        if (value === Banana.password) {
          callback()
        } else {
          callback(new Error('两次密码不一致'))
        }
      },
      trigger: 'blur'
    }]


}
const Flower = ref(null)

const addVerification = () => {

}

const Register = () => {
  Flower.value.validate((valid) => {
    if (valid){
      // 注册接口
      ElMessage.success('注册成功')

    }else {
      ElMessage.error('注册失败')
    }
  })

}


</script>

<template>
  <div class="layoutLogin">
    <div class="boxlogin">
      <h3 @click="addlogin ">登录</h3>
      <h3 @click="addlogin1">注册</h3>
    </div>

    <div v-if=" register ">
      <el-form :model="form" ref="formRef" :rules="rules">
        <el-form-item prop="account">
          <el-input
              v-model="form.account"
              style="width: 240px"
              placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="form.password"
              style="width: 240px"
              type="password"
              placeholder="请输入密码"
              show-password
          />
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="form.checked" label="条款与协议" size="large"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">
            登录
          </el-button>
        </el-form-item>

      </el-form>
    </div>

    <div v-else>
      <el-form :model="Banana" :rules="rules1" ref="Flower">
        <el-form-item prop="account">
          <el-select v-model="Banana.select" :placeholder="Banana.select" style="width: 80px">
            <el-option :label=" '+' + item" v-for="item in Banana.Elephant" :key="item" :value="item"/>
          </el-select>
          <el-input v-model="Banana.account" style="width: 240px" placeholder="手机号"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="Banana.password" style="width: 240px" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item prop="password1">
          <el-input type="password" v-model="Banana.password1" style="width: 240px" placeholder="确认密码" show-password />
        </el-form-item>
        <el-form-item prop="Banana.Verification">
          <el-input v-model="Banana.Verification" style="width: 120px" placeholder="验证码"/>
          <el-button @click="addVerification">获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="Graphical">
          <el-input v-model="Banana.Graphical" style="width: 120px" placeholder="图形验证码"/>
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button @click="Register">注册</el-button>
      </el-form-item>
    </div>

  </div>


</template>


<style scoped>
.layoutLogin {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  align-items: center;
}

.boxlogin {
  display: flex;

  h3 {
    margin-right: 30px;
  }
}

</style>