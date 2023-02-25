export default defineAppConfig({
  docus: {
    title: 'Catdocuments',
    description: 'Cat-themed documents',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'Catventurist',
      youtube: '@Catventurist',
      ecency: {
        label: 'Hive',
        icon: 'simple-icons:hive-blockchain',
        href: 'https://ecency.com/@catventurist'
       }
    },
    aside: {
      level: 1,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      fluid: true,
      exclude: []
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Made with 💕',
        href: 'https://docus.com'
      },
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxt'
        }
      ]
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'Catdocnuxt',
      owner: 'Catventurist',
      edit: false
    }
  }
})
