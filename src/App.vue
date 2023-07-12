<script setup lang="ts">
import { PedestrianFamily, ToolBox, GameConsole, Linux } from '@vicons/carbon';
import { darkTheme } from 'naive-ui'
import { ref } from 'vue';

import 'vfonts/FiraSans.css';
import './assets/text-styles.css';

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
  const lightThemeOverrides = {
  common: {
    primaryColor: '#000000'
  }
  // ...
};

const darkThemeOverrides = {
  common: {
    primaryColor: '#FFFFFF'
  }
  // ...
};

function toggleTheme() {
  theme = theme == null ? darkTheme : null;
  console.log(theme);
}

var theme;
var coverURI;

</script>

<template>
  <n-config-provider :theme="theme"
                     :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <main>
      <div class="wrapper">
        <TopBarMenu :toggleTheme="toggleTheme" :themex="theme"/>
        <div class="columns">
          <div id="main-column" class="column">
            <div class="top-main">
              <Hook />
            </div>
          
            <div class="column-content">
                <MainCard :themex="theme" />
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
                      * RPCSX does not provide estimates or compatibility for any title.
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
              <h2>Get Involved</h2>
            </div>
            <div class="column-content">
              <iframe src="https://discord.com/widget?id=252023769500090368&theme=dark" width="250" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
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