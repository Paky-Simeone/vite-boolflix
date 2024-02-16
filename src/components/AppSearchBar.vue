<script>
import axios from 'axios';
import { store } from '@/store';

export default{
    data(){
        return {
            store,
            ricerca:'',
            img:'',
        };
    },
    methods: {
        MovieSearch(){
            axios.get(store.apiUriMovie + this.ricerca).then((response)=>{
                console.log(response.data.results),
                store.Films = response.data.results
            });
        },
        SerieSearch(){
        axios.get(store.apiUriSerieTv + this.ricerca).then((response)=>{
            console.log(response.data.results),
            store.SerieTvs = response.data.results
        });
        },   
    },
};

</script>

<template>
  <div class="container mt-3 d-flex">
        <input type="text" class="form-control" v-model="ricerca" @keyup.enter="MovieSearch(), SerieSearch()"
            placeholder="Film e Serie Tv...">
        <button class="btn btn-danger mt-4" @click="MovieSearch(), SerieSearch()">Cerca</button>
    </div>
</template>

<style scoped>

</style>