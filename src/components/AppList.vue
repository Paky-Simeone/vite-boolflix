<script>
export default{
    data(){

    },
    methods: {
        flags(lingua){
            if(lingua == 'en')return'<img src="https://flagsapi.com/GB/shiny/16.png">'
            if(lingua == 'it')return'<img src="https://flagsapi.com/IT/shiny/16.png">'
            if(lingua == 'es')return'<img src="https://flagsapi.com/ES/shiny/16.png">'
            if(lingua == 'be')return'<img src="https://flagsapi.com/BE/shiny/16.png">'
            if(lingua == 'fr')return'<img src="https://flagsapi.com/FR/shiny/16.png">'
            if(lingua == 'au')return'<img src="https://flagsapi.com/AUS/shiny/16.png">'
            if(lingua == 'de')return'<img src="https://flagsapi.com/DE/shiny/16.png">'
        }
    }
}

</script>

<template>
  <div class="results mt-5 mx-5">
        <div class="films ">
            <ul v-for="Film in store.Films">
                <li>titolo: {{ Film.title }}</li>
                <li>titolo originale: {{ Film.original_title }}</li>
                <li> lingua: <span> <img :src="flags(Film.original_language)">{{ Film.original_language }}</span>
                </li>
                <li> voto: {{ Film.vote_average / 2 }}</li>
                <li> poster: {{ Film.poster_path }}</li>
            </ul>
        </div>

        <div class="serietv">
            <ul v-for="Serie in store.SerieTvs">
                <li>titolo: {{ Serie.title }}</li>
                <li>titolo originale: {{ Serie.original_title }}</li>
                <li> lingua: <span> <img :src="flags(Serie.original_language)">{{ Serie.original_language }}</span>
                </li>
                <li> voto: {{ Serie.vote_average / 2 }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>