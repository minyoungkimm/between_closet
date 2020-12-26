<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1 text-grey-10" bordered>
      <q-toolbar class="constrain">
        <q-toolbar-title  
        id="toptoolbar" 
        round 
        dense
        class="text-grand-hotel text-bold">
          BetweenCloset
        </q-toolbar-title>
        

        <q-btn color="grey-8" style="font-size: 14px" class="loginbtn" 
        v-if="user==null" label="로그인" v-on:click="gLogin" 
        flat/>
        <q-btn color="grey-8" style="font-size: 14px" v-if="user!=null" label="로그아웃" v-on:click="signOut" 
        flat/>
        <!-- {{user.data.name}} -->
        <!-- <div v-if='user'> -->

      </q-toolbar>
    </q-header>

      <q-footer
        class="bg-grey-1"
        bordered>

        <q-tabs
          class="text-grey-10"
        
          indicator-color='pink-4'>

        <q-route-tab
          to="/"
          icon="eva-home-outline" />
          <q-route-tab
          to="recommenu"
          icon="eva-search-outline" />
        <q-route-tab
          to="/friendsearch"
          icon="eva-person-add-outline" />
          <q-route-tab
          to="/friendlist"
          icon="eva-people-outline" />
          <q-route-tab
          to="/mypage"
          icon="eva-person-outline" />

      </q-tabs>
    </q-footer>

    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components'
import { Auth } from "aws-amplify";
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  // created() {
  //   onAuthUIStateChange((authState, authData) => {
  //     this.authState = authState;
  //     this.user = authData;
  //     if(authState === AuthState.VerifyContact){
  //       console.log('verifying!')
  //     }
  //   })
  // },

  data() {
    return {
      isLogin: false,
      userInfo: false,
      cat: false,
      user: null,
    };
  },


  mounted() {
    this.checkLogin();
  },

  methods: {
    async gLogin() {
      await Auth.federatedSignIn({ provider: "Google" }).then((res) => {
        console.log(res);
        this.$emit("login", Auth.currentAuthenticatedUser());
        // this.$store.commit('Account/userSignInDone',Auth.currentAuthenticatedUser())
      });
    },
    async checkUser() {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user: ", user);
    },
    async signOut() {
      await Auth.signOut();
    },

    async checkLogin() {
      this.LoggedUser = await Auth.currentAuthenticatedUser();
      this.$store.dispatch("account/finishUserSignIn", this.LoggedUser);
      this.getUserName();
      console.log(this.getUserName);
    },

    // 헤더 포함한 겟 요청

    async getUserName() {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.user = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/user",
        reqHeader
      );
      console.log("success");
      // console.log()
    },

    //헤더 없는 겟 요청
    testAxios() {
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/categories"
      ).then((res) => {
        console.log(res);
        this.cat = res;
      });
      console.log("finished");
    },
  },

  computed: {
    ...mapGetters({
      idToken: "account/idToken",

    }),
    // accessToken : function(){
    //   if(this.LoggedUser !== null)
    //     return this.LoggedUser.signInUserSession.accessToken.jwtToken

    //   return null
    // },
    // idToken: function(){
    //   if(this.LoggedUser !== null)
    //     return this.LoggedUser.signInUserSession.idToken.jwtToken

    //   return null
    // }
  },
};
</script>