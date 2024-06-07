<script setup>
import { Envelope, Growth, User } from "@/utils/icons";
</script>

<template>
  <section class="features py-[80px] px-[100px]">
    <div class="features-list flex items-center justify-between">
      <div class="card flex flex-col items-center py-[22px] px-[32px] w-fit">
        <div
          class="card-icons aspect-square bg-primary-primary-60 flex items-center justify-center w-16 h-16 rounded-[16px] flex-shrink-0"
        >
          <Envelope />
        </div>
        <div
          class="card-body py-6 text-center flex justify-center flex-col items-center"
        >
          <h2
            class="card-body_title text-2xl font-extrabold leading-[32px] text-greysecond-greysecond-90"
          >
            Share Team inboxes
          </h2>
          <div
            class="card-body_desc text-[16px] font-medium mt-[8px] text-greysecond-greysecond-60 w-[295px]"
          >
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone
          </div>
        </div>
      </div>
      <div
        class="card flex flex-col items-center py-[22px] px-[32px] w-fit shadow-2xl"
      >
        <div
          class="card-icons aspect-square bg-primary-primary-60 flex items-center justify-center w-16 h-16 rounded-[16px] flex-shrink-0"
        >
          <Growth />
        </div>
        <div
          class="card-body py-6 text-center flex justify-center flex-col items-center"
        >
          <h2
            class="card-body_title text-2xl font-extrabold leading-[32px] text-greysecond-greysecond-90"
          >
            Analytics dashboard
          </h2>
          <div
            class="card-body_desc text-[16px] font-medium mt-[8px] text-greysecond-greysecond-60 w-[295px]"
          >
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone
          </div>
        </div>
      </div>
      <div class="card flex flex-col items-center py-[22px] px-[32px] w-fit">
        <div
          class="card-icons aspect-square bg-primary-primary-60 flex items-center justify-center w-16 h-16 rounded-[16px] flex-shrink-0"
        >
          <User />
        </div>
        <div
          class="card-body py-6 text-center flex justify-center flex-col items-center"
        >
          <h2
            class="card-body_title text-2xl font-extrabold leading-[32px] text-greysecond-greysecond-90"
          >
            Deliver instant answer
          </h2>
          <div
            class="card-body_desc text-[16px] font-medium mt-[8px] text-greysecond-greysecond-60 w-[295px]"
          >
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
