<template>
  <div class="q-pa-md">
    <q-list bordered>
      <!-- 친구 요청 받은 목록 -->
      <q-item-label header>팔로잉 요청</q-item-label>

      <q-item
        v-for="friend in friends.data.received_wish_list"
        :key="friend.user_id"
        class="q-mb-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="orange" text-color="white">
            {{ friend.name.slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ friend.name }}</q-item-label>
          <q-item-label caption lines="1">{{ friend.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn
            unelevated
            rounded
            color="pink-4"
            label="수락"
            v-on:click="accept(`${friend.user_id}`)"
          />
        </q-item-section>
      </q-item>

      <!-- 친구 요청 보낸 목록 -->
      <q-item-label header>팔로우 요청</q-item-label>

      <q-item
        v-for="friend in friends.data.wish_friends_list"
        :key="friend.user_id"
        class="q-mb-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="amber" text-color="white">
            {{ friend.name.slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ friend.name }}</q-item-label>
          <q-item-label caption lines="1">{{ friend.email }}</q-item-label>
        </q-item-section>
      </q-item>

      <!-- 친구 목록 -->
      <q-item-label header>친구</q-item-label>
      <q-item
        v-for="friend in friends.data.friends_list"
        :key="friend.user_id"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <!-- <q-avatar color="primary" text-color="white"> -->
          <q-avatar color="pink-4" text-color="white">
            {{ friend.name.slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ friend.name }}</q-item-label>
          <q-item-label caption lines="1">{{ friend.email }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Friends",
  data() {
    return {
      friends: null,
      new_friends: null,
    };
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  mounted() {
    this.getFriends();
  },
  methods: {
    async getFriends() {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.friends = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/friends",
        reqHeader
      );
      // console.log(this.friends.data);
    },

    async accept(user_id) {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.new_friends = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/friends/accept/".concat(
          user_id
        ),
        reqHeader
      );

      console.log(">?>", this.new_friends);
      console.log("friends btn token>>", this.idToken);
    },
  },
};
</script>
<style scoped>
.q-pa-md {
  padding: 0;
}
</style>