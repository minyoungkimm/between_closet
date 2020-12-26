<template>
  <q-page class="constrain">
      <div class="q-pa-xs">
        <q-card
            v-for="item in recoms.data"
                    :key="`none-${item}`"
            class="card-post q-mb-md"
            flat bordered
            >
            <q-item>
                <q-img :src="item.url" />
            </q-item>
            <q-separator />
            <q-item>
                <q-btn id="like" flat size="18px" icon="eva-heart" />
                <div class=likes caption>{{item.likes}}명이 좋아했습니다</div>
            </q-item>
        </q-card>
    </div>
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
    this.clothesRecoms();

  },
  data() {
    return {
        slide: 'style',
        recoms: null,
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
  methods: {
      async clothesRecoms() {
        let rank = this.$route.params.rank
        console.log(rank)
          await Axios.get(
              `https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/recommendations/${rank}`,
              ).then((res) => {
            console.log(res);
            this.recoms = res;
            });
        }
    },
  
};
</script>


<style lang="sass">
.card-post
  .q-img
    min-height: 320px
    min-width:  320px
.likes
  align-self: center
.frameAlign
    margin-top: 290px

  
</style>
