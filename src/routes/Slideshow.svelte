<script lang="ts">
	import { register } from 'swiper/element/bundle';
	register();
</script>

<swiper-container
	slides-per-view={1}
	navigation={true}
	autoplay={{delay: 5000}}
	loop={true}
	class="border-2 shadow-xl w-full max-w-screen-2xl bg-neutral"
	freeMode={true}
>
	<swiper-slide><img src="uba_banner-7.jpg" alt="banner" class="mx-auto w-full" /></swiper-slide>
	<swiper-slide><img src="uba_banner-10.jpg" alt="banner" class="mx-auto w-full" /></swiper-slide>
	<swiper-slide><img src="uba_banner-11.jpg" alt="banner" class="mx-auto w-full" /></swiper-slide>
	<swiper-slide><img src="uba_banner-12.jpg" alt="banner" class="mx-auto w-full" /></swiper-slide>
</swiper-container>
