<template>
  <div class="finder">
    <Carousel :items-to-show="2" :transition="500">
      <Slide v-for="(banner, index) in data?.banners || []" :key="index">
        <img class="carousel__item" :src="banner.src" @click="jumpTo(banner.link)" />
      </Slide>
    </Carousel>
    <a-divider />
    <PluginList
      v-if="must && !!must.length"
      :title="$t('feature.market.finder.must')"
      :list="must"
      @download-success="downloadSuccess"
    />
    <PluginList
      v-if="recommend && !!recommend.length"
      :title="$t('feature.market.finder.recommended')"
      :list="recommend"
      @download-success="downloadSuccess"
    />
    <PluginList v-if="newList && !!newList.length" :title="$t('feature.market.finder.lastUpdated')" :list="newList" />
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import request from '../../../assets/request/index';
import PluginList from './plugin-list.vue';

import { useStore } from 'vuex';
const store = useStore();
const totalPlugins = computed(() => store.state.totalPlugins);
const allPluginData = computed(() => store.state.allPluginData);

const data = ref([]);

onBeforeMount(async () => {
  data.value = allPluginData.value?.finderDetail || (await request.getFinderDetail());
});

const must = computed(() => {
  const defaultData = data?.value?.must || [];
  if (!defaultData.length) return [];
  return defaultData.map((plugin) => {
    let searchInfo = null;
    totalPlugins.value.forEach((t) => {
      if (t.name === plugin) {
        searchInfo = t;
      }
    });
    return searchInfo;
  });
});

const jumpTo = (url) => {
  window.rubick.shellOpenExternal(url);
};

const recommend = computed(() => {
  const defaultData = data?.value?.recommend || [];
  if (!defaultData.length) return [];
  return defaultData.map((plugin) => {
    let searchInfo = null;
    totalPlugins.value.forEach((t) => {
      if (t.name === plugin) {
        searchInfo = t;
      }
    });
    return searchInfo;
  });
});

const newList = computed(() => {
  const defaultData = data?.value?.new || [];
  if (!defaultData.length) return [];
  return defaultData.map((plugin) => {
    let searchInfo = null;
    totalPlugins.value.forEach((t) => {
      if (t.name === plugin) {
        searchInfo = t;
      }
    });
    return searchInfo;
  });
});
</script>

<style lang="less">
.finder {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 0;
  }
  .ant-divider-horizontal {
    margin: 17px 0;
  }
}

.carousel__item {
  cursor: pointer;
  min-height: 180px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__track {
  margin-bottom: 0;
}

.carousel__slide {
  padding-right: 6px;
  &:last-child {
    padding-left: 6px;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
