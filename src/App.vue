<script>
import {store} from './store';
import AppSearchBar from './components/AppSearchBar.vue';
import AppList from './components/AppList.vue';

export default{
    data(){
        return {store}
    },
    components: {AppSearchBar, AppList},
};

</script>

<template>
  <AppSearchBar></AppSearchBar>
  <AppList></AppList>
</template>

<style scoped>

</style>
