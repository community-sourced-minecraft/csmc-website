import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSMC.dev",
  description: "A community sourced Minecraft server based on Minestom, Gate, NATS and Kubernetes",
  appearance: "force-dark",
  cleanUrls: true,
  head: [
    [
      'script',
      {
        async: ""
      },
      `
      setTimeout(() => {
        document.getElementsByClassName("actions")[0].children[2].onclick = () => {
          navigator.clipboard.writeText("csmc.dev")
          alert("Copied IP to clipboard")
      }}, 100)
      `
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/community-sourced-minecraft' },
      { icon: 'discord', link: 'https://discord.gg/n6fRdUTa8q' }
    ],

    footer: {
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright CSMC © 2024-now'
    }
  }
})
