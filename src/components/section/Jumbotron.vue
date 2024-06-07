<script setup>
import { HorizonIcons, Call } from "@/utils/icons";
</script>

<template>
  <div class="jumbotron flex items-center justify-between py-10">
    <div class="jumbotron-info w-[546px]">
      <div
        class="info_title text-sm leading-[20px] mb-[10px] font-bold text-primary-primary-50 inline-flex items-center"
      >
        <HorizonIcons class="mr-[10px]" />
        TRENDIEST TAILWIND TEMPLATES
      </div>
      <div class="info_hooks">
        <h2
          class="text-6xl font-extrabold leading-[72px] text-darksecond-darksecond-90"
        >
          Take your website to the next level with Horizon UI
        </h2>
        <p class="py-[24px] text-greysecond-greysecond-60 leading-[30px]">
          Save hundreds of hours trying to create and develop a dashboard from
          scratch. The fastest, most responsive & trendiest dashboard is here.
          Seriously.
        </p>
      </div>
      <div class="info_cta inline-flex items-center">
        <a
          href="#"
          class="btn py-[18px] px-[28px] text-sm leading-[24px] rounded-[12px] text-white bg-primary-primary-60 hover:bg-primary-primary-70 transition-all duration-300"
          >Get started now</a
        >
        <a
          href="#"
          class="btn mx-[24px] py-18 px-28px text-sm leading-24 inline-flex"
        >
          <Call class="mr-[6px]" />
          Book a free call
        </a>
      </div>
    </div>
    <img
      src="@/assets/img/jumbotron-img.webp"
      alt="jumbotron-img"
      class="jumbotron-img w-[456px]"
    />
  </div>
</template>
