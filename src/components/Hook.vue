<script setup>
function getTime() {
  const divmod = (x, y) => [Math.floor(x / y), x % y]; // Utility

  var developmentStart = new Date(2016, 6, 18); // Rough estimate of when DH left RPCS3
  var today = new Date();
  const months = (today.getFullYear() - developmentStart.getFullYear()) * 12 - developmentStart.getMonth() + today.getMonth() + 1; // Months between start and today
  var time_result = divmod(months, 12); // [years, partial year's months]
  return months > 12 ? (time_result[0] + Math.round(time_result[1] / 12 * 10)/10) + " years" : months + "months";
}

var contributors = 10; // TODO web scraping
// const response = await fetch("https://cors-anywhere.herokuapp.com/https://github.com/RPCSX/rpcsx/");
// contributors = await cheerio.load(response.text())('.Counter m1-1');
// console.log("hi");

</script>

<template>
    <div class="hook">
        <h1>{{ getTime() }} of development.</h1>
        <h1> {{ contributors }} experienced contributors.</h1>
        <h1>0 days since someone asked for Bloodborne.</h1>
      </div>
</template>