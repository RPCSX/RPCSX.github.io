<script setup lang="ts">
import { GlobalTheme, darkTheme } from 'naive-ui'

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

var contributors = 10; // TODO web scraping
// const response = await fetch("https://cors-anywhere.herokuapp.com/https://github.com/RPCSX/rpcsx/");
// contributors = await cheerio.load(response.text())('.Counter m1-1');
// console.log("hi");

var theme: GlobalTheme | null;
var coverURI;

function toggleTheme() {
  theme = theme == null ? darkTheme : null;
  console.log(theme);
}

</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <main>
      <div class="wrapper">
        <TopBarMenu :toggleTheme="toggleTheme" :themex="theme" />
        <div class="columns">
          <div id="main-column" class="column">
            <div class="top-main">
              <Hook />
            </div>

            <div class="column-content">
              <Home />
            </div>
          </div>
          <div id="right-column" class="column">
            <div class="top-right">
              <h2>Get Involved</h2>
            </div>
            <div class="column-content">
              <iframe src="https://discord.com/widget?id=252023769500090368&theme=dark" width="250" height="400"
                allowtransparency="true" frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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
  margin: 0px;
  /* removes default style */
  display: flex;
  /* enables flex content for its children */
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
  height: 100%;
  /* allows both columns to span the full height of the browser window */
  display: flex;
  flex-direction: column;
  /* stacks the left and right headers above the bottom content */
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
  /* flex-shrink: 0;  /* makes sure that content is not cut off in a smaller browser window */
  /* [OCDkirby: so that was a fucking lie.] */
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