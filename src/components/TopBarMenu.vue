<script setup lang="ts">
import { h, ref, Component } from 'vue'
import { NIcon, MenuOption } from 'naive-ui'
import {
  Code as CodeIcon,
  Book as BookIcon,
  LogoDiscord as DiscordIcon,
  Moon as MoonIcon, Sun as SunIcon
} from '@vicons/carbon'

const props = defineProps({
  toggleTheme: {
    type: Function,
    required: true
  },
  coverImage: {
    type: ref,
    required: true
  },
  themex: {
    type: ref,
    required: true
  },
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function toggleTheme() {
  // this.darkModeButtonIcon = this.darkModeButtonIcon == MoonIcon ? SunIcon : MoonIcon;
  // this.$emit('toggle-darkmode');
  console.log("Toggle theme");
}

var activeKey: any = null;

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
    children: [
      {
        // TODO: populate
      }
    ]
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://discord.com/invite/mx8FbxN5',
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
    <n-button quaternary tag="a" href="https://rpcsx.github.io/rpcsx-site/">
      <img alt="RPCSX logo" class="logo" :src="themex == null ? './assets/logo-light.png' : './assets/logo-dark.png'"
        width="32" height="32" />
    </n-button>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <n-button circle @click="toggleTheme()" class="dark-mode-button">
      <template #icon>
        <n-icon>
          <MoonIcon />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<style scoped>
.bar-wrapper {
  display: inline-block;
  flex-flow: row nowrap;
  text-align: center;
  margin: 8px;
}
</style>