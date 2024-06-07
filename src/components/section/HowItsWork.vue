<script setup>
import { ChevronRight } from "@/utils/icons";
</script>

<template>
  <section class="how-its-work p-[120px]">
    <div class="hiw-title mx-auto">
      <h3 class="text-4xl text-center leading-[44px] font-extrabold">
        How Horizon Works?
      </h3>
      <p
        class="font-medium text-center text-md my-[10px] text-greysecond-greysecond-60"
      >
        Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
      </p>
    </div>
    <div class="hiw flex justify-between items-center pt-[60px]">
      <div class="card inline-flex items-top">
        <div
          class="aspect-square rounded-full w-12 h-12 flex items-center justify-center bg-primary-primary-60"
        >
          <h2 class="text-[16px] font-bold text-white">1</h2>
        </div>
        <div class="w-[232px] ml-4">
          <h2
            class="text-[16px] w-fit leading-[30px] text-greysecond-greysecond-90 font-bold"
          >
            Create your Account
          </h2>
          <p class="text-greysecond-greysecond-60 w-fit">
            Condimentum vit pellemsque habitant morbi at molestie.
          </p>
        </div>
      </div>
      <ChevronRight class="mx-5" />
      <div class="card inline-flex items-top">
        <div
          class="aspect-square rounded-full w-12 h-12 flex items-center justify-center bg-primary-primary-60"
        >
          <h2 class="text-[16px] font-bold text-white">2</h2>
        </div>
        <div class="w-[232px] ml-4">
          <h2
            class="text-[16px] w-fit leading-[30px] text-greysecond-greysecond-90 font-bold"
          >
            Create your Account
          </h2>
          <p class="text-greysecond-greysecond-60 w-fit">
            Condimentum vit pellemsque habitant morbi at molestie.
          </p>
        </div>
      </div>
      <ChevronRight class="mx-5" />
      <div class="card inline-flex items-top">
        <div
          class="aspect-square rounded-full w-12 h-12 flex items-center justify-center bg-primary-primary-60"
        >
          <h2 class="text-[16px] font-bold text-white">3</h2>
        </div>
        <div class="w-[232px] ml-4">
          <h2
            class="text-[16px] w-fit leading-[30px] text-greysecond-greysecond-90 font-bold"
          >
            Create your Account
          </h2>
          <p class="text-greysecond-greysecond-60 w-fit">
            Condimentum vit pellemsque habitant morbi at molestie.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
