<template >
  <div>
    <div style="margin-top: 15%; margin-bottom: 13%">
      <input
        class="input_box bg-grey-2"
        placeholder="친구 검색"
        @input="myChange"
      />
      <q-btn @click="ssearch" icon="eva-search-outline" flat></q-btn>
    </div>
    <div v-if="searched_user != null">
      <q-separator class="lineline" />

      <q-item-label class="search_result" header>검색 결과</q-item-label>

      <q-item
        style="margin-bottom: 3%"
        v-for="item in searched_user.data"
        :key="`none-${item}`"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ item["name"].slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item["name"] }}</q-item-label>
          <q-item-label caption lines="1">{{ item["email"] }}</q-item-label>
        </q-item-section>

        <router-link
          :to="{ name: 'PageProfile', params: { friend_info: item } }"
        >
          <q-btn label="프로필 보기" style="color: black" />
        </router-link>
      </q-item>
    </div>
  </div>
</template>



<script>
import Axios from "axios";
export default {
  data: function () {
    return {
      name: null,
      searched_user: null,
    };
  },
  methods: {
    async ssearch() {
      console.log("들어옴");
      this.searched_user = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/search/".concat(
          this.name
        )
      );
      console.log(this.searched_user);
    },

    myChange($event) {
      this.name = $event.target.value;
    },
  },
};
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
.input_box {
  width: 240px;
  margin-left: 15%;
  margin-right: 0%;

  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.00937em;
  border: none;
  border-radius: 5px;
  background-color: rgba(221, 221, 221, 0.911);
  color: rgba(0, 0, 0, 0.87);
  padding: 2px 10px;
}
.search_result {
  text-align-last: center;
  margin-top: 3%;
}
</style>
