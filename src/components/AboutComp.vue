<template>
	<div>
		<section class="about_us">
			<div class="container about_us_wrap">
				<atropos class="about_us_item_vertical" :activeOffset="20" :rotateXMax="5" :shadow-scale="0">
					<img :src="require('@/assets/images/'+picVert)" alt="about us" data-atropos-offset="5">
				</atropos>
				<div class="about_us_item_text">
					<div class="text_wrap">
						<h2 :id="h2Id">{{ title }}</h2>
						<p>{{ text1 }}</p>
						<p>{{ text2 }}</p>
						<router-link :to="{name: linkTo}" class="arrow text_black"><span class="menu_link">{{ buttonText }}</span>
							<span>
								<svg width="30" height="10" viewBox="0 0 30 10" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
										fill="black" />
								</svg>
							</span>
						</router-link>
					</div>

				</div>
				<div class="about_us_item_horizontal" :id="itemId">
					<atropos class="pic_wrap" :activeOffset="30">
						<img :src="require('@/assets/images/'+ picHor)" alt="about us" data-atropos-offset="5">
					</atropos>
				</div>
			</div>
		</section>  
	</div>
</template>


<script>
import 'atropos/scss'
import Atropos from 'atropos/vue'

export default {
	name : 'AboutComp',
	components: {Atropos},
	props: {
		picVert:  String,
		picHor:  String,
		title:  String,
		text1: String,	
		text2: String,	
		h2Id:  String,
		itemId: String,	
		buttonText:  String,
		linkTo: String
		
	}  
}
</script>

<style lang="scss">
	@media screen and (max-width: 600px) {
		.about_us_wrap {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
		.about_us_item_vertical,
		.about_us_item_text {
			margin:0 auto;
			padding:0 40px;
			max-width: 405px;
			float:none;
		}
		h1 {
			font-size: 3rem;
		}
		p{
			font-size: 1rem;
		}

	}
	@media screen and (max-width: 350px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
