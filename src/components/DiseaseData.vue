<template>
    <div class="hello" v-if="has_loaded">

        <h1>Spending Data</h1>

        <div class="list">
            <select v-model="selectedArea">
                <option v-for="area in areaNames" :value="area">{{ area }}</option>
            </select>
        </div>

        <pre>
            {{ this.filteredNeighbours }}
        </pre>

    </div>
</template>

<script>
    export default {
        name: 'DiseaseData',
        props: {
            msg: String
        },
        data() {
            return {
                has_loaded: false,
                search_term: '',
                neighbours: [],
                filteredData: [],
                areaNames: [],
                selectedArea: null,
            }
        },
        mounted() {
            this.grabData();
        },
        methods: {
            grabData() {
                axios.get('./json/lt_data_neighbours.json')
                    .then(rsp => {
                        this.neighbours = rsp.data;
                        this.getAreaNames();
                    })

            },

            getAreaNames(){
                this.neighbours.forEach((item) => {
                    if( !this.areaNames.includes(item.Area_x) ){
                        this.areaNames.push( item.Area_x );
                    }
                })
                this.has_loaded = true;
            }
        },
        computed: {
            filteredNeighbours(){
                return this.neighbours.filter((item) => {
                    return item.Area_x === this.selectedArea;
                })
            }
        }
    }
</script>