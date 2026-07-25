// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        // 画像のリンク色に近い爽やかなブルーを追加
        'shiomi-blue': '#40a8f5',
      }
    }
  },
  // ▼ ここに plugins を追加します ▼
  plugins: [
    require('@tailwindcss/typography')
  ]
}