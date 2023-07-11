<script setup lang="ts">
import { NIcon } from 'naive-ui'
  import {
    Code as CodeIcon,
    Book as BookIcon,
    LogoDiscord as DiscordIcon,
    Moon as MoonIcon, Sun as SunIcon
  } from '@vicons/carbon'

  defineProps({
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
</script>

<template>
  <div class="bar-wrapper">
    <n-button
    quaternary
    tag="a"
    href="https://rpcsx.github.io/rpcsx-site/">
      <img alt="RPCSX logo" class="logo" :src="themex == null ? './assets/logo-light.png' : './assets/logo-dark.png'" width="32" height="32" />
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

.dark-mode-button {
  padding-left: 5px;
}

</style>
  
<script lang="ts">
  
  function renderIcon (icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
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
  
  export default defineComponent({
    methods: {
      toggleTheme: function() {
        this.darkModeButtonIcon = this.darkModeButtonIcon == Moon ? Sun : Moon;
        this.$emit('toggle-darkmode');
      },
      getCoverURI() {
        return this.$parent.theme === null ? './assets/logo-light.png' : './assets/logo-dark.png';
      }
    },
    setup () {
      return {
        activeKey: ref<string | null>(null),
        darkModeButtonIcon: ref(Moon),
        menuOptions
      }
    }
  })
</script>