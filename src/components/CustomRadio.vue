<template>
  <div class="flex flex-col gap-2 overflow-auto" :class="class">
    <div class="p-4 rounded-2xl pr-14 relative select-none" :class="item.icon ? 'ml-6 pl-8' : 'ml-0 pl-4'" :style="{ background: item.color }" v-ripple v-for="(item, index) in items" :key="index" @click="toggleActive(index)">
      <div v-if="item.icon" class="w-10 h-10 rounded-full bg-white shadow absolute top-2 -left-5 z-10 flex justify-center items-center">
        <img :src="item.icon" :alt="item.title" />
      </div>
      <p class="text-zinc-800 font-medium m-0">
        {{ item.title }}
      </p>
      <div class="w-6 h-6 rounded-full bg-white absolute top-4 right-4 z-10 shadow flex justify-center items-center">
        <div class="w-4 h-4 rounded-full transition-all" :class="item.active ? 'bg-bombero-400 scale-100' : 'bg-transparent scale-50'"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {

  props: {
    class: String,
    items: Array<{
      id?: number;
      title: string;
      color: string;
      icon?: string;
      active: boolean;
    }>,
  },
  emits: ['item-clicked'],
  setup() {
    return {
    };
  },
  methods: {
    toggleActive(index: number) {
      this.items?.forEach((item, i) => {
        item.active = i === index;
      });
      this.$emit('item-clicked' as any, this.items);
    }
  },
  mounted() {

  },
}
</script>