<template>
  <div id="app">
    <Interval :data="data" unit-type="℃"></Interval>
  </div>
</template>

<script>


import Interval from './components/interval.vue';


const data = [
  { time: '1', value: 0.6 },
  { time: '2', value: 0.2 },
  { time: '3', value: 0.3 },
  { time: '4', value: 0.1 },
  { time: '5', value: 1.6 },
  { time: '6', value: 0.1 },
  { time: '7', value: 1.6 },
  { time: '8', value: 0.6 },
  { time: '9', value: 0.2 },
  { time: '10', value: 0.3 },
  { time: '11', value: 0.1 },
  { time: '12', value: 1.6 },
  { time: '13', value: 0.1 },
  { time: '14', value: 1.6 },
  { time: '15', value: 0.6 },
  { time: '16', value: 0.2 },
  { time: '17', value: 0.3 },
  { time: '18', value: 0.1 },
  { time: '19', value: 1.6 },
  { time: '20', value: 0.1 },
  { time: '21', value: 1.6 },
  { time: '22', value: 0.6 },
  { time: '23', value: 0.2 },
  { time: '24', value: 0.3 },
  { time: '25', value: 0.1 },
  { time: '26', value: 1.6 },
  { time: '27', value: 0.1 },
  { time: '28', value: 1.6 },
  { time: '29', value: 0.6 },
  { time: '30', value: 0.2 },
  { time: '31', value: 0.3 },
];


export default {
  name: 'app',
  data() {
    return {
      data,
    };
  },
  components: {
    Interval,
  },
};
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
