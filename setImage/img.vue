<template>
	<div style="z-index: 0;">
		<el-carousel height="400px" :interval="5000" arrow="always">
			<el-carousel-item v-for="srcs in itmes" :key="srcs.id">
				<img style="width: 100%; height: 100%;" :src="srcs.url"  alt="" @click="a" />
			</el-carousel-item>
		</el-carousel>


	</div>
</template>

<script>
	export default {
		name: 'swiper',
		data() {
			return {
				// 第一种方式，图片无法显示，是先加载了src，然后在放路径进行
				srcs: '../../assets/img/1.jpg',
				// 第二种方式，vue中默认这种方式显示图片
				itmes: [{
						id: 1,
						url:require('../../assets/1.jpg')
					},
					{
						id: 2,
						url:require('../../assets/2.jpg')
					},
					{
						id: 3,
						url:require('../../assets/3.jpg')
					},
				],
				
			};
		},
		methods: {
			a(e) {
				alert(e);
			}
		},
	}
</script>

<style>

</style>

