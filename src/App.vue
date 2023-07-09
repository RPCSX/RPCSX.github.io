<template>
  <n-config-provider :theme="theme"
                     :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <main>
      <div class="wrapper">
        <TopBarMenu @toggle-darkmode="toggleTheme()"/>
        <div class="columns">
          <div id="main-column" class="column">
            <div class="top-main">
              <div class="hook">
                <h1>{{ months }} {{ months == 1 ? "month" : "months" }} of development.</h1>
                <h1> {{ contributors }} experienced contributors.</h1>
                <h1>0 days since someone asked for Bloodborne.</h1>
              </div>
            </div>
          
            <div class="column-content">
                <n-card hoverable>
                  <template #cover>
                    <img :src="getCoverURI()">
                  </template>
                  <template #header>
                    <div class="card-header">RPCSX is your PlayStation 4 emulator.</div>
                  </template>
                  <div class="body-text">Use only with lawfully obtained archival copies of PS4 games you physically own.</div>
                </n-card>

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
  gap: 8px;
}

#main-column {
    flex-shrink: 0;  /* makes sure that content is not cut off in a smaller browser window */
    flex-grow: 4;
    align-self: center;
    align-items: center;
    gap: 16px;
}

.n-card {
  max-width: 300px;
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
</style>

<script>
  import { darkTheme } from 'naive-ui'
  import { ref } from 'vue';
  import axios, * as others from 'axios';
  import * as cheerio from 'cheerio';
  import { LogoGithub }  from '@vicons/carbon';

  import 'vfonts/FiraSans.css';
  import './assets/text-styles.css';

  import './assets/logo-light.png';


  document.title = 'RPCSX - PS4 Emulator';

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

  var repoCreation = new Date(2023, 6, 18);
  var today = new Date();
  const months = (today.getFullYear() - repoCreation.getFullYear()) * 12 - repoCreation.getMonth() + today.getMonth() + 1; // Months between creation and today

  var contributors = null; // TODO web scraping
  // const response = await fetch("https://cors-anywhere.herokuapp.com/https://github.com/RPCSX/rpcsx/");
  // contributors = await cheerio.load(response.text())('.Counter m1-1');
  // console.log("hi");

  var theme = null;


  export default defineComponent({
    title: 'RPCSX - PS4 Emulator',
    methods: {
      // A hacky workaround to testing mobile
      toggleTheme() {
        theme = theme == null ? darkTheme : null;
        console.log(theme);
      },
      openGithub() {
        window.open('https://github.com/RPCSX/rpcsx', '_blank');
      },
      getCoverURI() {
        return theme === null ? './assets/logo-light.png' : './assets/logo-dark.png';
      }
    },
    setup() {
      return {
        darkTheme,
        theme: ref(null),
        lightThemeOverrides,
        darkThemeOverrides,
        months,
        contributors
      }
    }
  })
</script>
