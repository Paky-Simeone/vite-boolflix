import {reactive} from 'vue';
export const store = reactive({
 apiUriMovie:'https://api.themoviedb.org/3/search/movie?api_key=fc07760979ebf5a115240889ac78127f&query=',
 apiUriSerieTv: 'https://api.themoviedb.org/3/search/tv?api_key=fc07760979ebf5a115240889ac78127f&query=',
 apiKey: 'fc07760979ebf5a115240889ac78127f',
 Films:[],
 SerieTvs:[],
});