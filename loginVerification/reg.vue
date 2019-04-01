<template>
	<div class="home">
		<div style="width: 400px; height: 600px; margin: auto;">
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="userName">
					<el-input type="text" v-model="ruleForm2.userName" ></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="电话" prop="phone">
					<el-input v-model.number="ruleForm2.phone"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
					<el-button @click="resetForm('ruleForm2')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			var checkAge = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('电话不能为空'));
				}
				setTimeout(() => {
					if (!Number.isInteger(value)) {
						callback(new Error('请输入数字值'));
					} else {
						if (value <= 11) {
							callback(new Error('必须是小于或等于11位数'));
						} else {
							callback();
						}
					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var validateUserName = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('用户名不能为空'));
				} else {
					callback();
				}
			}
			return {
				ruleForm2: {
					userName: '',
					pass: '',
					checkPass: '',
					phone: ''
				},
				rules2: {
					userName: [{
							validator: validateUserName,
							trigger: 'blur'
						}

					],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					phone: [{
						validator: checkAge,
						trigger: 'blur'
					}]
				}
			};

		},
		methods: {
			submitForm(formName) {
				 // 调用验证的方法
				 this.$refs[formName].validate((valid) => {
		
          if (valid) {
						 console.log(this.ruleForm2)
             console.log('error submit!!');
          } 
        });
			},
			resetForm(formName) {
				//重置
				 this.$refs[formName].resetFields();
			}
		},
		components: {

		}
	}
</script>

