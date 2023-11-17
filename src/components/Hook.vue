<script setup lang="ts">
import { NText, NGradientText } from 'naive-ui';

function getTime() {
  const divmod = (x: any, y: any) => [Math.floor(x / y), x % y]; // Utility

  var developmentStart = new Date(2016, 6, 18); // Rough estimate of when DH left RPCS3
  var today = new Date();
  const months = (today.getFullYear() - developmentStart.getFullYear()) * 12 - developmentStart.getMonth() + today.getMonth() + 1; // Months between start and today
  var time_result = divmod(months, 12); // [years, partial year's months]
  return months > 12 ? (time_result[0] + Math.round(time_result[1] / 12 * 10) / 10) + " years" : months + "months";
}

const response = await fetch('https://api.github.com/repos/rpcsx/rpcsx/contributors?per_page=1')
const headers = response.headers
var contributors = headers.get('link')?.match(/&page=(\d+)>; rel="last"/)[1]
</script>

<style scoped>
.hook {
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
}

.hook-item {
  padding: 4px 0px;
  display: flex;
  flex-flow: column nowrap;
}

.n-gradient-text {
  font-size: 32pt;
}

.n-text {
  font-size: 16pt;
  font-weight: bold;
}

@font-face {
  font-family: "Rave";
  src: url('/fonts/The_Rave_Is_In_Your_Pants.otf');
}
</style>

<template>
  <div class="hook">
    <div class="hook-item">
      <n-gradient-text type="info" size="72pt" style="font-family: 'Rave';">RPCSX</n-gradient-text>
      <n-gradient-text type="info">{{ getTime() }}</n-gradient-text>
      <n-text>of development.</n-text>
    </div>
    <div class="hook-item">
      <n-gradient-text type="info">{{ contributors }}</n-gradient-text>
      <n-text>experienced contributors.</n-text>
    </div>
    <div class="hook-item">
      <n-gradient-text type="info">0</n-gradient-text>
      <n-text>days since someone asked for Bloodborne.</n-text>
    </div>
  </div>
</template>
