<script setup lang="ts">
import 'vfonts/FiraSans.css';

import { defineComponent, ref } from 'vue';

import { GlobalThemeOverrides, darkTheme, NLayout, NCarousel, NText, NAlert } from 'naive-ui'
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import { CardThemeVars } from 'naive-ui/es/card/styles';
import { TypographyThemeVars } from 'naive-ui/es/typography/styles';
import { GradientTextThemeVars } from 'naive-ui/es/gradient-text/styles';
import { MenuThemeVars } from 'naive-ui/es/menu/styles';
import { ButtonThemeVars } from 'naive-ui/es/button/styles';
import { AlertThemeVars } from 'naive-ui/es/alert/styles';

const menuOverrides: Partial<MenuThemeVars> = {
  fontSize: '12pt',
  itemTextColorActiveHorizontal: '#4C3E9C',
  itemIconColorActiveHorizontal: '#4C3E9C',
}

const darkMenu: Partial<MenuThemeVars> = {
  ...menuOverrides,
  itemTextColorHorizontal: '#F8F2F1',
  groupTextColor: '#F8F2F1',
  itemTextColorHoverHorizontal: '#739AF0',
  itemIconColorHoverHorizontal: '#739AF0',
}

const lightMenu: Partial<MenuThemeVars> = {
  ...menuOverrides,
  groupTextColor: '#121420',
  itemTextColorHorizontal: '#121420',
  itemTextColorHoverHorizontal: '#1D5DEC',
  itemIconColorHoverHorizontal: '#1D5DEC',
}

// const gradientTextOverrides: Partial<GradientTextThemeVars> = {
//   colorEndInfo: '#1D5DEC',
//   colorStartInfo: '#4C3E9C',
// }
const gradientTextOverrides: Partial<GradientTextThemeVars> = {
  rotate: '188deg',
  colorEndInfo: '#3633fa',
  colorStartInfo: '#9600ff',
}

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

const cardOverrides: Partial<CardThemeVars> = {
  titleFontWeight: 'bold',
  titleFontSizeHuge: '16pt',
  titleFontSizeMedium: '16pt',
  titleFontSizeSmall: '16pt',
  fontSizeMedium: '12pt',
  borderRadius: '20px'
}

const lightCard: Partial<CardThemeVars> = {
  ...cardOverrides,
  borderColor: '#1D5DEC',
  color: '#f9f9f8'
}

const buttonOverrides: Partial<ButtonThemeVars> = {
  textColorHover: '#3633fa',
  borderHover: '1px solid #3633fa',
  textColorFocus: '#a2a1ff',
  borderFocus: '1px solid #a2a1ff'
}

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: '#F8F2F1',
    primaryColor: '#121420',
    fontFamily: 'v-sans',
    cardColor: '#F8F2F1'
  },
  Typography: lightTypography,
  Card: lightCard,
  GradientText: gradientTextOverrides,
  Menu: lightMenu,
  Button: buttonOverrides,
  // ...
};

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: '#121420',
    primaryColor: '#F8F2F1',
    cardColor: '#121420',
  },
  Typography: darkTypography,
  Card: cardOverrides,
  GradientText: gradientTextOverrides,
  Menu: darkMenu,
  Button: buttonOverrides,
  // ...
};
</script>

<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <n-layout>
      <div class="wrapper">
        <div class="top-portion-wrapper">
          <Suspense>
            <TopBarMenu
              :themex="theme"
              :toggle="toggleTheme"
            />
          </Suspense>
          <n-alert
            title="Important"
            type="warning"
            closable
          >
            <n-text class="alert-text">
              This is the only official RPCSX site. others such as rpcsx.com are not affiliated
              with RPCSX.
            </n-text>
          </n-alert>
          <div class="columns">
            <div
              id="main-column"
              class="column"
            >
              <div class="top-main">
                <Suspense>
                  <Hook :themex="theme" />
                </Suspense>
              </div>

              <!-- todo put something here if necessary -->
              <div class="column-content" />
            </div>
            <div
              id="right-column"
              class="column"
            >
              <div class="top-right">
                <MainCard :themex="theme" />
              </div>
              <div class="column-content">
                <!-- <iframe src="https://discord.com/widget?id=252023769500090368&theme=dark" width="250" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> -->
              </div>
            </div>
          </div>
        </div>
        <n-divider />
        <div class="bottom-portion-wrapper">
          <n-carousel
            autoplay
            direction="horizontal"
            dot-type="line"
          >
            <img
              class="carousel-img"
              src="/assets/sonicmania.png"
              alt="Sonic Mania running on RPCSX"
            >
            <img
              class="carousel-img"
              src="/assets/firmware.png"
              alt="PS4 firmware running on RPCSX"
            >
            <img
              class="carousel-img"
              src="/assets/we-are-doomed.png"
              alt="We Are Doomed running on RPCSX"
            >
            <img
              class="carousel-img"
              src="/assets/sample-1.png"
              alt="Development sample running on RPCSX"
            >
            <img
              class="carousel-img"
              src="/assets/steamydeck.jpg"
              alt="RPCSX crashing on Steam Deck"
            >
          </n-carousel>
          <n-divider />
          <n-text class="copyright-text">
            © {{ new Date().getFullYear() }} - RPCSX (the real one)
          </n-text>
        </div>
      </div>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
var theme = ref<BuiltInGlobalTheme | null>(darkTheme);

export default defineComponent({
  props: ['theme'],
  methods: {
    toggleTheme() {
      theme.value = theme.value == null ? darkTheme : null;
    }
  }
})
</script>

<style scoped>
.n-layout {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.n-carousel {
  width: 80%;
  height: 80%;
  align-self: center;
}

.n-divider {
  margin: 0px 16px;
}

.copyright-text {
  display: flex;
  align-self: flex-start;
  padding-left: 10%;
  font-weight: bold;
  font-size: 12pt;
}

.n-alert {
  margin: 8px 10%
}

.alert-text {
  font-weight: bold;
  font-size: 12pt;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.layout-dark {
  background-image: url('/assets/background-dark.png');
}

.layout-light {
  background-image: url('/assets/background-light.png');
}

.wrapper {
  height: 100%;
  overflow: hidden;
  margin: 10px 10px;
  box-sizing: border-box;
}

.top-portion-wrapper {
  display: flex;
  /* enables flex content for its children */
  flex-direction: column;
}

.bottom-portion-wrapper {
  margin-top: 30px;
  gap: 16px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.columns {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  margin-top: 20px;
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
  flex-grow: 2;
  align-self: center;
  align-items: center;
  gap: 20px;
}

#right-column {
  flex-grow: 1;
  gap: 16px;
  padding-right: 10px;
  align-self: center;
  align-items: center;
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
  padding-top: 15%;
}
</style>
