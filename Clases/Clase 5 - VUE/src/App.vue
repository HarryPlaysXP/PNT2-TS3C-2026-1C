<script setup>
import AppFooter from './components/AppFooter.vue';
import AppMenu from './components/AppMenu.vue';
import ProductsView from './views/ProductsView.vue';
</script>

<template>
 <AppMenu />
   <RouterView />
 <AppFooter />
</template>
