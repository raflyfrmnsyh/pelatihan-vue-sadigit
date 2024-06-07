<script setup>
import { Logo } from "@/utils/icons";
import Links from "@/components/navbar/Links.vue";
import NavBtn from "@/components/navbar/NavBtn.vue";
</script>

<template>
  <nav class="py-[24px] px-[150px] flex items-center justify-between">
    <Logo />
    <Links />
    <NavBtn />
  </nav>
</template>
