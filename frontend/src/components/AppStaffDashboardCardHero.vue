<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { useStaffQuestionnaireStore } from '../stores/staffQuestionnaire';
import { useTippy } from 'vue-tippy';
import questionnaireImg from '../assets/svgs/Questionnaire.svg';

// stores
const questionnaireStore = useStaffQuestionnaireStore()

// refs
const story = ref(null)

// tippyjs
useTippy(story, {
  content: `<a target="_blank" href="https://storyset.com/education">Education illustrations by Storyset</a>`,
  animation: 'scale',
  allowHTML: true,
  interactive: true,
  theme: 'translucent'
})
</script>

<template>
  <main class="w-full h-full selection:bg-rose-500 selection:text-white">

    <div class="w-full flex items-center justify-between rounded-lg bg-rose-500 p-5">

      <!-- start of card text -->
      <div class="w-full p-5 flex flex-col gap-2 md:flex-1">
        <h3 class="text-xl text-slate-50 font-bold md:text-3xl">Keep Your Students Engaged</h3>
        <p class="text-xs font-normal text-slate-200 md:text-sm">Create questionnaires and ask them relevant questions to help decide their career path.</p>
        <div class="mt-5">
          <button @click="questionnaireStore.create.open = true" type="button" class="bg-slate-100 text-sm rounded-lg px-4 py-3 text-slate-900 font-medium shadow-lg transition-all duration-200 hover:scale-105">
            Create Questionnaire
          </button>
        </div>
      </div>
      <!-- end of card text -->

      <div class="hidden flex-1 items-center justify-center md:flex">
        <div class="items-center justify-center rounded-full bg-rose-300 flex md:w-60 md:h-60 ">
          <img ref="story" :src="questionnaireImg" alt="Story" class="w-full h-full scale-75">
        </div>
      </div>

    </div>

  </main>
</template>