<template >
	<nav>
		<router-view/>
		<footer-comp v-if="$route.name !== 'Projects'" :footerTheme="(
			$route.name === 'ClientsPage' ? 'dark' : 
			$route.name === 'ProjectN' ? 'dark' :
			'footer'
			)">
		</footer-comp>
				
	</nav>
</template>

<script>
import FooterComp from '@/components/FooterComp'

export default {
	
	components: {
		FooterComp
	}
}
</script>
