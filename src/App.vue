<script setup lang="ts">
import 'vfonts/FiraSans.css';

import { PedestrianFamily, ToolBox, GameConsole, Linux } from '@vicons/carbon';
import { GlobalThemeOverrides, darkTheme, NLayout } from 'naive-ui'
import { TypographyThemeVars } from 'naive-ui/es/typography/styles';
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';

import { defineComponent, ref } from 'vue';
import { CardThemeVars } from 'naive-ui/es/card/styles';

const typographyOverrides: Partial<TypographyThemeVars> = {
  headerFontSize1: '30pt',
  headerFontWeight: 'bold',
  headerFontSize2: '18pt',
  headerFontSize3: '14pt',
  headerMargin3: '0px',
}

const darkTypography: Partial<TypographyThemeVars> = {
  ...typographyOverrides,
  textColor: '#F8F2F1' 
}

const lightTypography: Partial<TypographyThemeVars> = {
  ...typographyOverrides,
  textColor: '#121420' 
}

const cardOverrides : Partial<CardThemeVars> = {
  titleFontWeight: 'bold',
  titleFontSizeHuge: '16pt',
  titleFontSizeMedium: '16pt',
  titleFontSizeSmall: '16pt',
  fontSizeMedium: '12pt',
}

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: '#F8F2F1',
    primaryColor: '#121420',
    fontFamily: 'v-sans'
  },
  Typography: lightTypography,
  Card: cardOverrides,
  // ...
};

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: '#121420',
    primaryColor: '#F8F2F1'
  },
  Typography: darkTypography,
  Card: cardOverrides,
  // ...
};
</script>

<template>
  <n-config-provider :theme="theme" :themeOverrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-layout>
      <div class="wrapper">
        <Suspense>
          <TopBarMenu :themex="theme" :toggle="toggleTheme" />
        </Suspense>
        <div class="columns">
          <div id="main-column" class="column">
            <div class="top-main">
              <Suspense>
                <Hook :themex="theme"/>
              </Suspense>
            </div>
          
            <div class="column-content">
              <ContentCard>
                <template #card-icon>
                  <PedestrianFamily />
                </template>
                <template #card-title>
                  Huge community.
                </template>
                Everyone is here! The spirit of RPCS3 lives on.
              </ContentCard>
              <ContentCard>
                <template #card-icon>
                  <ToolBox />
                </template>
                <template #card-title>
                  Ongoing development.
                </template>
                Est. 2016 by DH himself.
              </ContentCard>
              <ContentCard>
                <template #card-icon>
                  <GameConsole />
                </template>
                <template #card-title>
                  All your favorite titles.
                </template>
                <div class="joke-wrapper">
                  <div class="body-text">
                    Bloodborne coming Soon™*
                  </div>
                  <div class="joke-footnote">
                    *RPCSX does not provide estimates or compatibility for any title.
                  </div>
                </div>
                </ContentCard>
                <ContentCard>
                  <template #card-icon>
                    <Linux />
                  </template>
                  <template #card-title>
                    Currently Linux only.
                  </template>
                  WSL on Windows is being discussed.
                </ContentCard>
                <n-divider />
            </div>
          </div>
          <div id="right-column" class="column">
            <div class="top-right">
              <n-h2>Get Involved</n-h2>
            </div>
            <div class="column-content">
              <MainCard :themex="theme"/>
              <!-- <iframe src="https://discord.com/widget?id=252023769500090368&theme=dark" width="250" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> -->
            </div>
          </div>
        </div>
      </div>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.wrapper {
  height: 100%;   
  overflow: hidden;  
  margin: 0px;  /* removes default style */
  display: flex;  /* enables flex content for its children */
  box-sizing: border-box;
  flex-direction: column;
}

.columns {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
}

.column {
  height: 100%;  /* allows both columns to span the full height of the browser window */
  display: flex;
  flex-direction: column;  /* stacks the left and right headers above the bottom content */
  flex-wrap: nowrap;
  margin: 8px;
}
.column-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 16px;
}

#main-column {
  /* flex-shrink: 0;  /* makes sure that content is not cut off in a smaller browser window */ /* [OCDkirby: so that was a fucking lie.] */
  flex-shrink: 1;
  flex-grow: 4;
  align-self: center;
  align-items: center;
  gap: 16px;
}

#right-column {
  flex-grow: 0;
  gap: 5px;
  padding-right: 10px;
}

.right-pane-button {
  margin: 15px;
  padding: 16px;
}

.top-main {
  flex-shrink: 0;
}

.top-right {
  flex-shrink: 0;
  display: flex;
    
}

.joke-wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  flex-shrink: 1;
  gap: 8px;
  align-items: flex-start;
}

.joke-footnote {
  align-self: flex-end;
  font-size: 8pt;
  word-wrap: break-word;
}
</style>

<script lang="ts">
var theme = ref<BuiltInGlobalTheme | null>(darkTheme);

export default defineComponent({
  methods: {
    toggleTheme() {
      theme.value = theme.value == null ? darkTheme : null;
    }
  },
  props: ['theme']
})
</script>
