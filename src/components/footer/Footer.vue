<script setup>
import { Logo } from "@/utils/icons";
import { FooterLinks, FooterLinksIcons } from "@/utils/section";
</script>

<template>
  <footer
    class="px-[120px] py-[80px] flex items-center justify-center flex-col gap-8"
  >
    <Logo />
    <FooterLinks />
    <FooterLinksIcons />
    <div
      class="copyright font-medium text-sm leading-6 text-greysecond-greysecond-60"
    >
      &copy;2023. Horizon UI Library. All rights reserved
    </div>
  </footer>
</template>
