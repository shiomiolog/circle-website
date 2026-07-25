// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      // サイトのデフォルトタイトル
      title: 'shiomiolog',
      // 各ページでタイトルを指定した際のフォーマット（例: Works | shiomiolog）
      titleTemplate: '%s | shiomiolog',

      // Meta情報
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'サイバーセキュリティと情報法をテーマにする個人サークル「shiomiolog」の公式サイトです。'
        }
      ],

      // リンク（フォント・ファビコン等）
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // ▼ Noto Sans JP のみ（標準・少し太め・太字）を読み込む ▼
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon'
  ],
  content: {
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    }
  },
  compatibilityDate: '2024-07-24',
})