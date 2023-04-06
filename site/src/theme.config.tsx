import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: null,
  // darkMode: false,
  project: {
    link: 'https://github.com/AppMachine/gitbook-export',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/AppMachine/gitbook-export',
  main: ({ children }) => {
    return (
      <div>
        {children}
      </div>
    )
  },
  primaryHue: 0,
  // sidebar: {
  //   defaultMenuCollapseLevel: 1,
  //   toggleButton: true,
  // },
  footer: {
    component: null
  },
  navbar: {
    component: () => <div />
  },
  editLink: {
    component: () => null
  },
  // feedback: {
  //   useLink: () => '/contact'
  // },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Lucide Icons'
    }
  },
}

export default config
