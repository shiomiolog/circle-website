<!-- app/pages/works/index.vue -->
<template>
    <div class="max-w-4xl mx-auto px-6 py-20 text-slate-700">
        <header class="mb-12 text-center">
            <h1 class="font-sans text-3xl font-bold tracking-widest text-slate-900 mb-4">WORKS</h1>
            <p class="font-sans text-sm text-slate-400 tracking-wider">Publications and products.</p>
        </header>

        <!-- タブナビゲーション -->
        <div class="flex justify-center gap-8 border-b border-slate-200 mb-12">
            <button @click="activeTab = 'primary'"
                class="pb-3 font-sans text-sm font-bold tracking-widest uppercase transition duration-300 relative"
                :class="activeTab === 'primary'
                    ? 'text-slate-900 border-b-2 border-shiomi-blue -mb-px'
                    : 'text-slate-400 hover:text-slate-600'">
                Primary Works <span class="text-xs ml-1 opacity-75">({{ circleWorks.length }})</span>
            </button>
            <button @click="activeTab = 'guest'"
                class="pb-3 font-sans text-sm font-bold tracking-widest uppercase transition duration-300 relative"
                :class="activeTab === 'guest'
                    ? 'text-slate-900 border-b-2 border-shiomi-blue -mb-px'
                    : 'text-slate-400 hover:text-slate-600'">
                Contributions <span class="text-xs ml-1 opacity-75">({{ guestWorks.length }})</span>
            </button>
        </div>

        <!-- 作品カード一覧（表示中のタブに応じて変化） -->
        <div v-if="displayWorks.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="work in displayWorks" :key="work.path"
                class="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition relative">

                <!-- 寄稿作品タブの時のみ GUEST バッジを表示 -->
                <span v-if="work.category === 'guest'"
                    class="absolute top-4 right-4 bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-bold tracking-wider">
                    GUEST
                </span>

                <h3 class="font-bold text-lg mb-2" :class="work.category === 'guest' ? 'pr-16' : ''">
                    {{ work.title }}
                </h3>

                <p class="text-sm text-slate-500 mb-4">{{ work.event }}</p>

                <NuxtLink :to="work.path" class="text-shiomi-blue font-medium hover:underline">
                    詳細を見る →
                </NuxtLink>
            </div>
        </div>

        <!-- 該当する作品が存在しない場合 -->
        <div v-else class="text-center py-12 text-slate-400">
            作品が見つかりませんでした。
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
    title: 'WORKS'
})

// アクティブなタブの状態管理 ('primary' または 'guest')
const activeTab = ref('primary')

// 全ての作品データを日付の新しい順（DESC = 降順）で取得
const { data: allWorks } = await useAsyncData('works', () =>
    queryCollection('works')
        .order('date', 'DESC')
        .all()
)

// 自サークル作品と寄稿作品の振り分け
const circleWorks = computed(() =>
    allWorks.value?.filter(work => work.category !== 'guest') || []
)
const guestWorks = computed(() =>
    allWorks.value?.filter(work => work.category === 'guest') || []
)

// 現在選択されているタブに応じた表示用データ
const displayWorks = computed(() => {
    return activeTab.value === 'primary' ? circleWorks.value : guestWorks.value
})
</script>