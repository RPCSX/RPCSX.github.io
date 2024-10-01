<script setup lang="ts">
import { h, defineComponent, Component } from 'vue'
import { NIcon, MenuOption, MenuGroupOption, MenuDividerOption } from 'naive-ui'
import {
  Code as CodeIcon,
  Book as BookIcon,
  LogoDiscord as DiscordIcon,
  Moon as MoonIcon, Sun as SunIcon
} from '@vicons/carbon'
import { html, load } from 'cheerio'

const props = defineProps({
  themex: {
    type: Object
  },
  toggle: {
    type: Function,
    required: true
  }
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

var activeKey: any = null

// Web scraping
// AKA the reason this component is async
const page = await fetch("https://rpcsx.github.io/wiki/")
const cont = await page.text();
const $ = load(cont)
const pages = $("li.libdoc-sidebar-item > a")
var wikiLinks: (MenuOption | MenuGroupOption | MenuDividerOption)[] = []
for (let index = 0; index < pages.length; index++) {
  const element = pages[index];
  const linkName = element.children[0].data.trim() // The property does exist just trust me bro

  wikiLinks[index] = {
    label: () =>
      h(
        'a',
        {
          href: 'https://rpcsx.github.io' + element.attribs.href,
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        linkName
      ),
    key: 'wiki-' + linkName
  }
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://github.com/RPCSX/rpcsx',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        'development'
      ),
    key: 'development',
    icon: renderIcon(CodeIcon)
  },
  {
    label: 'wiki',
    key: 'wiki',
    icon: renderIcon(BookIcon),
    children: wikiLinks
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://discord.com/invite/WEGamDwZnE',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        'discuss'
      ),
    key: 'discuss',
    icon: renderIcon(DiscordIcon)
  }
]
</script>

<template>
  <div class="bar-wrapper">
    <n-button
      quaternary
      tag="a"
      href="/"
    >
      <img
        alt="RPCSX logo"
        class="logo"
        src="/assets/logo-dark.png"
        width="32"
        height="32"
      >
    </n-button>
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
    />
    <n-button
      circle
      class="dark-mode-button"
      @click="toggle"
    >
      <template #icon>
        <n-icon>
          <MoonIcon v-if="themex == null" />
          <SunIcon v-else />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  methods: {
    toggleTheme() {
      props.toggle()
    }
  }
})
</script>

<style scoped>
.bar-wrapper {
  display: inline-block;
  flex-flow: row nowrap;
  text-align: center;
  margin: 8px;
}
</style>
