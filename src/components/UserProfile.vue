<template>
  <!-- <div class="q-gutter-sm"> -->
  <q-list>
    <!-- 나 -->
    <div v-if="user == null">
      <q-item>
        <q-item-section avatar class="col-4" style="padding: 0">
          <q-avatar size="70px" class="profile">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-item-label size="14" caption class="name">{{
            userName
          }}</q-item-label>
          <div class="email">{{ email }}</div>
        </q-item-section>
        <q-item-section class="col-4 info">
          <q-item-label class="number">36</q-item-label>
          <q-item-label caption class="caption"> 코디 </q-item-label>
        </q-item-section>
        <q-item-section class="col-4 info">
          <q-item-label class="number">{{ friends.length }}</q-item-label>
          <q-item-label caption class="caption"> 친구 </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="align-right">
        <q-item-section style="padding: 0px">
          <q-btn
            color="pink-4"
            icon-right="send"
            label="코디 하러 가기"
            @click="
              $router.push({ path: 'outfitselect', params: { id: user_id } })
            "
          />
        </q-item-section>
      </q-item>
    </div>

    <!-- 친구 -->
    <div v-if="user != null">
      <q-item>
        <q-item-section avatar class="col-4" style="padding: 0">
          <q-avatar size="70px" class="profile">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-item-label size="14" caption class="name">{{
            user.name
          }}</q-item-label>
          <div class="email">{{ user.email }}</div>
        </q-item-section>
        <q-item-section class="col-4 info">
          <q-item-label class="number">36</q-item-label>
          <q-item-label caption class="caption"> 코디 </q-item-label>
        </q-item-section>
        <q-item-section class="col-4 info">
          <q-item-label class="number">{{ user.friends.length }}</q-item-label>
          <q-item-label caption class="caption"> 친구 </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="align-right">
        <q-item-section style="padding: 0px">
          <router-link
            :to="{
              name: 'PageOutfitSelect',
              params: { friend_id: user.user_id },
            }"
          >
            <q-btn
              label="코디 하러 가기"
              color="pink-4"
              icon-right="send"
              style="width: 96%; margin-left: 3%; mragin-right: 3%"
            />
          </router-link>
        </q-item-section>
      </q-item>
    </div>
  </q-list>
  <!-- </div> -->
  <!-- <q-item-label>{{userName}}</q-item-label> -->
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "UserProfile",

  data() {
    return {
      tab: "mails",
      user: null,
    };
  },
  created() {
    this.user = this.$route.params.friend_info;
  },

  computed: {
    ...mapGetters({
      idToken: "account/idToken",
      userName: "account/userName",
      email: "account/email",
      friends: "account/friends",
    }),
  },
};
</script>
<style scoped>
.profile {
  margin-top: 10px;
  margin-right: 30px;
}
.info {
  text-align: left;
  padding-bottom: 30px;
}
.name {
  margin-left: 9px;
  margin-top: 10px;
  font-size: 16px;
}

.email {
  margin-left: 5px;
}

.number {
  font-size: 20px;
  margin-left: 2px;
}

.button {
  margin-bottom: 50px;
}
</style>