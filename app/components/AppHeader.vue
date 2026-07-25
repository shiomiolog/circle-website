<!-- app/components/AppHeader.vue -->
<template>
    <!-- ヘッダー自体は白（bg-white）にして、背景（slate-50）とコントラストをつける -->
    <header class="bg-slate-50 border-b border-slate-200 py-6 px-8 shadow-sm">
        <div class="max-w-4xl mx-auto flex justify-between items-center">

            <NuxtLink to="/"
                class="font-bold text-lg tracking-widest text-slate-800 hover:text-shiomi-blue transition duration-300">
                shiomiolog
            </NuxtLink>

            <nav class="space-x-8 text-sm tracking-widest text-slate-500 uppercase">
                <!-- リンクのホバー色を shiomi-blue に変更 -->
                <NuxtLink to="/" class="hover:text-shiomi-blue transition duration-300">About</NuxtLink>
                <NuxtLink to="/works" class="hover:text-shiomi-blue transition duration-300">Works</NuxtLink>

                <!-- ポータルサイトへのリンクを追加（外部サイト想定） -->
                <a href="https://shiomiolog.com/" target="_blank" rel="noopener noreferrer"
                    class="hover:text-shiomi-blue transition duration-300">
                    Portal
                </a>
            </nav>

        </div>
    </header>
</template>