<!-- app/pages/works/[...slug].vue -->
<template>
    <main class="max-w-3xl mx-auto px-6 py-12 text-slate-700">
        <NuxtLink to="/works"
            class="text-sm text-slate-500 hover:text-shiomi-blue hover:underline mb-6 inline-block transition duration-300">
            ← 頒布物一覧へ戻る
        </NuxtLink>

        <article v-if="page">
            <h1 class="text-3xl font-bold mb-4 text-slate-900">{{ page.title }}</h1>

            <div class="flex flex-wrap gap-4 text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4 items-center">
                <span v-if="page.event"><strong class="text-slate-700">イベント:</strong> {{ page.event }}</span>
                <span v-if="page.price"><strong class="text-slate-700">価格:</strong> {{ page.price }}円</span>

                <!-- 上部のテキストリンク（rel="noopener noreferrer" を追加） -->
                <a v-if="page.tweet_url" :href="page.tweet_url" target="_blank" rel="noopener noreferrer"
                    class="flex items-center text-shiomi-blue hover:underline transition duration-300 ml-auto">
                    <Icon name="mdi:twitter" size="18" class="mr-1" />
                    告知ツイートを見る
                </a>
            </div>

            <!-- マークダウンの本文 -->
            <div class="prose max-w-none leading-relaxed mb-12 text-slate-800">
                <ContentRenderer :value="page" />
            </div>

            <!-- 下部のツイート埋め込みセクション -->
            <div v-if="tweetId" class="mt-8 border-t border-slate-200 pt-8">
                <h3 class="font-sans text-sm font-bold tracking-widest text-slate-800 uppercase mb-4 text-center">
                    Announcement
                </h3>

                <!-- 幅制御と中央寄せ -->
                <div class="w-full max-w-[550px] mx-auto [&_.twitter-tweet]:!w-full [&_.twitter-tweet]:!max-w-none">
                    <Tweet :tweet-id="tweetId" />
                </div>
            </div>

        </article>

        <div v-else class="text-slate-400 py-8">
            <p>作品が見つかりませんでした。</p>
        </div>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import Tweet from 'vue-tweet'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
    queryCollection('works').path(route.path).first()
)

// ▼ 動的にページタイトルを設定（例: 寄稿：学術アイドルマスター合同 Vol.3 | shiomiolog）
useHead({
    title: computed(() => page.value?.title || '作品詳細')
})

// tweet_url からツイートIDを抽出する処理
const tweetId = computed(() => {
    if (!page.value?.tweet_url) return null;

    try {
        const url = new URL(page.value.tweet_url);
        const pathParts = url.pathname.split('/');
        const id = pathParts[pathParts.length - 1];

        return /^\d+$/.test(id) ? id : null;
    } catch (e) {
        return null;
    }
})
</script>