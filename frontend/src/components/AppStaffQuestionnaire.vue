<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { useStaffQuestionnaireStore } from '../stores/staffQuestionnaire';
import AppStaffQuestionnaireCard from './AppStaffQuestionnaireCard.vue'
import AppEmptyState from './AppEmptyState.vue';
import AppButton from './AppButton.vue';
import IconFolderPlus from './icons/IconFolderPlus.vue';

// stores
const questionnaireStore = useStaffQuestionnaireStore()

</script>

<template>
  <main class="w-full h-full flex flex-col bg-white px-5 pt-32 lg:pt-20">

    <div class="w-full h-full flex flex-col gap-10">
      <div class="sticky top-0 w-full bg-white/50 backdrop-blur-lg border-b border-slate-200 pb-5 z-10">
        <p class="text-lg text-slate-900 font-semibold tracking-wider md:text-2xl">Questionnaires</p>
      </div>

      <!-- start of loading effect -->
      <div v-if="questionnaireStore.retrieve.loading" class="w-full grid gap-7 grid-cols-1 pb-10 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="card in [1,2,3,4,5,6,7,8,9]" class="w-full h-40 bg-slate-100 shadow-md animate-pulse"></div>
      </div>
      <!-- end of loading effect -->

      <div v-else-if="questionnaireStore.retrieve.data.length > 0" class="grid gap-7 grid-cols-1 pb-10 sm:grid-cols-2 xl:grid-cols-3">
        <AppStaffQuestionnaireCard v-for="questionnaire in questionnaireStore.retrieve.data" :key="questionnaire.id" :questionnaire="questionnaire" />
      </div>

      <div v-else class="w-full mx-auto md:w-7/12">
        <AppEmptyState>
          <template #icon>
            <IconFolderPlus class="w-10 h-10 fill-slate-200 md:w-16 md:h-16" />
          </template>
          <template #title>
            <p class="text-slate-500 text-xs font-normal text-center md:text-sm">
              You have not created any questionnaires.
            </p>
          </template>
          <template #tail>
            <div class="flex items-center justify-center mt-3">
              <AppButton @click="questionnaireStore.create.open = true" label="Create" :type="2" :color="3" />
            </div>
          </template>
        </AppEmptyState>
      </div>
    </div>

  </main>
</template>