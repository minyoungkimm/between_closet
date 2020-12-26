<template>
  <q-page class="constrain q-pa-md">
    <div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]" class="z-top">
        <q-fab
          icon="add"
          direction="up"
          color="primary"
        >
          <q-fab-action @click="$router.push({path: 'colorfilter/9'})" color="white" />
          <q-fab-action @click="$router.push({path: 'colorfilter/2'})" color="amber" />
          <q-fab-action @click="$router.push({path: 'colorfilter/4'})" color="pink-3" />
          <q-fab-action @click="$router.push({path: 'colorfilter/5'})" color="red-8" />
          <q-fab-action @click="$router.push({path: 'colorfilter/7'})" color="blue-10" />
          <q-fab-action @click="$router.push({path: 'colorfilter/8'})" color="grey-7"  />
          <q-fab-action @click="$router.push({path: 'colorfilter/0'})" color="brown-8" />
          <q-fab-action @click="$router.push({path: 'colorfilter/1'})" color="grey-10" />
        </q-fab>
      </q-page-sticky>
      <q-page-sticky position="bottom-right" :offset="[90, 18]" class="z-top">
        <q-fab
          icon="add"
          direction="up"
          color="accent"
        >
          <q-fab-action @click="$router.push({path: 'categoryfilter/top'})" color="white" />
          <q-fab-action @click="$router.push({path: 'categoryfilter/bottom'})" color="amber" />
          <q-fab-action @click="$router.push({path: 'categoryfilter/outer'})" color="pink-3" />
          <q-fab-action @click="$router.push({path: 'categoryfilter/one_piece'})" color="red-8" />
        </q-fab>
      </q-page-sticky>
    </div>
    <q-card
      v-for="item in clothes.data"
      :key="`none-${item}`"
      class="card-post q-mb-md"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">{{ item.name }}</q-item-label>
          <q-item-label caption>
            {{ item.email }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-img :src="item.url" />
      <q-card-section>
        <q-item>
          <q-btn
            v-if="item.liked_users.includes(userName)"
            id="like"
            flat
            size="18px"
            icon="eva-heart"
          />
          <q-btn
            v-else
            id="like"
            flat
            size="18px"
            icon="eva-heart-outline"
            :clothesid="item.clothes_id"
            @click="likeClothes($event, item)"
          />
          <div class="q-pt-md" caption>{{item.liked_users.length}}명이 좋아했습니다</div>
        </q-item>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { date } from "quasar";
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "PageHome",
  mounted() {
    // this.rank = this.$route.params.rank
    this.colorFilter();

  },
  data() {
    return {
        slide: 'style',
        clothes: null,
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
  methods: {
      async colorFilter() {
        let id = this.$route.params.id
        console.log(id)
          await Axios.get(
              `https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/all/color/${id}`,
              ).then((res) => {
            console.log(res);
            this.clothes = res;
            });
        },
        likeClothes(e, item) {
            let id = item.clothes_id;
            console.log(id);
            let params = {
                email: this.email,
            };
            console.log(params);
            Axios.post(
                `https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/like/${id}`,
                params
            ).then((res) => {
                console.log("success");
            });
        },
    },
    computed: {
    ...mapGetters({
      idToken: "account/idToken",
      userName: "account/userName",
      email: "account/email",
      friends: "account/friends",
      uid: "acccount/uid",
    }),
  },
  
};
</script>