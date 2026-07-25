<!-- app/pages/index.vue -->
<template>
    <!-- 全体のテキストカラーを青みがかった slate-700 に設定 -->
    <main class="max-w-3xl mx-auto px-8 py-20 text-slate-700">

        <header class="mb-24 text-center">
            <h1 class="font-sans text-3xl font-bold tracking-widest text-slate-900 mb-4">shiomiolog</h1>
            <p class="font-sans text-sm text-slate-400 tracking-wider">Mapping the physical and logical layers.</p>
        </header>

        <!-- 背景を白にし、枠線と影をつけたカード風デザイン -->
        <section class="mb-20 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div class="border-b-2 border-shiomi-blue pb-2 mb-6">
                <h2 class="font-sans text-xl font-bold tracking-widest text-slate-800 uppercase">Identity / About</h2>
            </div>

            <p class="leading-loose text-slate-800">
                <strong class="font-bold">サイバーセキュリティ</strong>と<strong
                    class="font-bold">情報法</strong>を主軸に活動する個人サークルです。<br />
                主にIT技術者やセキュリティ研究者が実務・研究を行う上で押さえておくべき「関係法令や法的リスク」の解説書をはじめ、セキュリティ技術に関する書籍を制作・頒布しています。<br />
                その他の情報通信に関する話題や、個人の研究成果をまとめた技術書も頒布しています。<br />
                あわせて、私自身、Virtual YouTuber「<strong class="font-bold">汐猫みお</strong>」の一次創作など、自由なクリエイティブ活動もします。<br />
                Vlog 動画で語りきれなかったことやエッセイ・漫画レポなどにも挑戦していけたらなと思います。<br />
                物理層（Physical）と論理層（Logical）、そして技術と法が交錯する境界で、確かな知見に基づいた作品づくりを目指しています。
            </p>
        </section>

        <!-- リンク集セクション -->
        <section class="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div class="border-b-2 border-shiomi-blue pb-2 mb-6">
                <!-- text-xs から text-xl に修正し、サイズを統一 -->
                <h2 class="font-sans text-xl font-bold tracking-widest text-slate-800 uppercase">Connect / Links</h2>
            </div>
            <ul class="flex flex-col space-y-4 text-sm">
                <li>
                    <!-- rel="noopener noreferrer" を追加してセキュリティを強化 -->
                    <a href="https://x.com/shiomiolog" target="_blank" rel="noopener noreferrer"
                        class="flex items-center text-slate-600 hover:text-shiomi-blue transition duration-300">
                        <Icon name="mdi:twitter" size="20" class="mr-3" /> X (Twitter)
                    </a>
                </li>
                <li>
                    <a href="https://shiomiolog.booth.pm/" target="_blank" rel="noopener noreferrer"
                        class="flex items-center text-slate-600 hover:text-shiomi-blue transition duration-300">
                        <Icon name="mdi:shopping" size="20" class="mr-3" /> BOOTH
                    </a>
                </li>
            </ul>
        </section>

    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'shiomiolog',
    titleTemplate: null // トップページだけテンプレートを無効化
})
</script>