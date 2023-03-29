<script lang="ts">
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
</script>

<swiper-container
	slides-per-view={1}
	navigation={true}
	loop={true}
	effect="fade"
>
	<swiper-slide><img src="uba_banner-7.jpg" alt="banner" class="mx-auto" /></swiper-slide>
	<swiper-slide><img src="uba_banner-10.jpg" alt="banner" class="mx-auto" /></swiper-slide>
	<swiper-slide><img src="uba_banner-11.jpg" alt="banner" class="mx-auto" /></swiper-slide>
</swiper-container>
