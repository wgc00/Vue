<!-- 第一个页面，使用js进行vue页面的跳转 -->
<template>
	<div>
		<button @click="routerClick"></button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			
			}
		},
		method: {
			routerClick() {
				// 获取一个路由，
				//记住了这里不能使用path进行页面的跳转，不然无法接收到params传过去的参数，如是使用的path跳转，接收到的是name的值，如果是用name属性传过去的，接收到的是params的值
				this.$router.push(
					name: '跳转页面的名字',
					params: 传递的参数
				)
			}
		}
	}
</script>

<!-- 第二个页面进行接收参数 -->
<script>
	export default {
		data() {
			return {
			
			}
		},
		created() {
			
			// 接收页面传递过来的，数据
			// 在这里要注意一点就是，不能使用 this.$router.params 进行接收
			// 因为 this.$router 是一个新的路由对象，如果要接收我们应该使用this.$route 对象
			this.$route.params;

		}
	}
</script>
