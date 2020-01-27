<template>
  <div id="app">
    <SmokingData msg="Welcome to Your Vue.js App"/>
    <hr>
    <DiseaseData ></DiseaseData>
  </div>
</template>

<script>
import SmokingData from './components/SmokingData.vue'
import DiseaseData from './components/DiseaseData'

export default {
  name: 'app',
  components: {
    SmokingData,
    DiseaseData
  }
}
</script>
