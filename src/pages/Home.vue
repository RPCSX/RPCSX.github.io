<template>
  <MainCard />
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
</template>