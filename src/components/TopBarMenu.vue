<template>
  <div class="wrapper">
    <darkModeButtonIcon/>
    <n-button
    quaternary
    tag="a"
    href="https://rpcsx.github.io/rpcsx-site/">
      <img alt="Vue logo" class="logo" :src="getCoverURI()" width="32" height="32" />
    </n-button>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <n-button tertiary @click="toggleTheme()">
      <template #icon>
        <n-icon>
          <Moon />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<style scoped>
.wrapper {
  display: inline-block;
  margin: 8px;
}
</style>
  
<script lang="ts">
  import { NIcon } from 'naive-ui'
  import {
    Code as CodeIcon,
    Book as BookIcon,
    LogoDiscord as DiscordIcon,
    Moon, Sun
  } from '@vicons/carbon'
  
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
      label: 'discuss',
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