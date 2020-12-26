<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
    class="bg-white text-grey-10"
    bordered
    >
      <q-toolbar class="constrain">

        <q-toolbar-title
        class="text-grand-hotel text-bold">
          BetweenCloset
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

      <q-footer
        class="bg-white"
        bordered>
        <q-tabs    
        inline-label
        mobile-arrows   
          class="text-grey-10"
          
          indicator-color="transparent">
                <q-btn
          flat
          size="18px"
          icon="eva-home-outline" 
          to="/"
          />

          <q-route-tab
          to="/mypage/jacket"
          label="Jacket" 
          />
          <q-route-tab 
          to="/mypage/tshirt"
          label="T-shirt" 
          />
          <q-route-tab
          to="/mypage/pants"
          label="Pants" />
          <q-route-tab
          to="/mypage/onepiece"
          label="Onepiece" />
         <q-btn
          flat
          size="18px"
          icon="eva-person-outline" 
          to="/mypage"
          />

      </q-tabs>

      </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .q-toolbar
    
      height: 77px
  .q-toolbar__title
    font-size: 30px
    
      text-align: center
    

  .q-footer
    .q-tab__icon
      font-size: 30px


</style>
