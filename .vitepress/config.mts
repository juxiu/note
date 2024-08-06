import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "juxiu",
  description: "Some records of Juxiu",
  base:'/note/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'leetCode', link: '/docs/leetCode/' }
    ],
    sidebar: {
      '/docs/leetCode/':[
              { text: 'Markdown Examples', link: '/docs/test/markdown-examples' },
              { text: 'Runtime API Examples', link: '/docs/test/api-examples' }
      ],
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/test/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/test/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
