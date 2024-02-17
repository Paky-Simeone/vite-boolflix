<script>
import { store } from '@/store';
export default{
    data(){
        return{
            store,
        }
    },
    methods: {
        flags(lingua){
            if(lingua == 'en')return "https://flagsapi.com/GB/shiny/16.png"
            if(lingua == 'it')return "https://flagsapi.com/IT/shiny/16.png"
            if(lingua == 'es')return "https://flagsapi.com/ES/shiny/16.png"
            if(lingua == 'be')return "https://flagsapi.com/BE/shiny/16.png"
            if(lingua == 'fr')return "https://flagsapi.com/FR/shiny/16.png"
            if(lingua == 'au')return "https://flagsapi.com/AUS/shiny/16.png"
            if(lingua == 'de')return "https://flagsapi.com/DE/shiny/16.png"
        }
    }
}

</script>

<template>
  <div class="results mt-5 mx-5">
        <div class="films ">
            <div v-for="Film in store.Films" class="card">
                <img :src="`https://image.tmdb.org/t/p/w342/${ Film.poster_path }`" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">titolo: {{ Film.title }}</h5>
                    <p class="card-text">titolo originale: {{ Film.original_title }}</p>
                    <p>lingua: <span><img :src="flags(Film.original_language)">{{ Film.original_language }}</span> </p>
                    <p>voto: {{ Film.vote_average / 2 }}</p>
                </div>
            </div>
        </div>

        <div class="serietv">
            
            <div v-for="Serie in store.SerieTvs" class="card">
                <img :src="`https://image.tmdb.org/t/p/w342/${ Serie.poster_path }`" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">titolo: {{ Serie.name }}</h5>
                    <p class="card-text">titolo originale: {{ Serie.original_name }}</p>
                    <p>lingua: <span><img :src="flags(Serie.original_language)">{{ Serie.original_language }}</span> </p>
                    <p>voto: {{ Serie.vote_average / 2 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>