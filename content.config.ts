import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    works: defineCollection({
      type: 'page',
      // ▼ 'works/**/*.md' に変更（階層が深くなっても全検索できる）
      source: 'works/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        event: z.string().optional(),
        price: z.number().optional(),
        image: z.string().optional(),
        booth_url: z.string().optional(),
        tweet_url: z.string().optional(),
        category: z.string().default('circle'),
      })
    })
  }
})