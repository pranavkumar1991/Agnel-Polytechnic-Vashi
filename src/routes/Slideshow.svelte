<script lang="ts">
	import { register } from 'swiper/element/bundle';
	register();
</script>

<swiper-container
	slides-per-view={1}
	navigation={true}
	autoplay={true}
	loop={true}
	class="bg-stone-800 border-2 border-gray-500"
>
	<swiper-slide><img src="uba_banner-7.jpg" alt="banner" class="mx-auto" /></swiper-slide>
	<swiper-slide><img src="uba_banner-10.jpg" alt="banner" class="mx-auto" /></swiper-slide>
	<swiper-slide><img src="uba_banner-11.jpg" alt="banner" class="mx-auto" /></swiper-slide>
	<swiper-slide><img src="uba_banner-12.jpg" alt="banner" class="mx-auto" /></swiper-slide>
</swiper-container>
