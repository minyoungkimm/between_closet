<template>
  <q-page class="constrain q-pa-md">
    <div class="q-pa-xs" style="margin: 0; padding: 0">
      <!-- <div>완성된 코디</div> -->
      <q-field rounded filled style="margin: 5% 3% 0 3%">
        <div
          class="self-center full-width no-outline"
          tabindex="0"
          style="color: black; text-align: center"
        >
          완성된 코디
        </div>
      </q-field>
      <div class="row q-col" style="margin: 0 3% 3% 3%; padding: 0">
        <div
          class="col-6"
          v-for="item in outfit"
          :key="`none-${item}`"
          style="margin:0, padding: 0;"
        >
          <q-card
            style="border-radius: 0; box-shadow: 0; margin: 0; padding: 0"
          >
            <q-img :src="item.croppedw" style="float: left" />
          </q-card>
        </div>
      </div>
      <router-link
        :to="{ name: 'PageProfile', params: { user_id: this.user_id } }"
      >
        <q-btn
          color="grey"
          icon-right="send"
          label="친구에게 보내기"
          style="width: 94%; margin: 0 3% 0 3%"
          @click="sendOutfit"
        />
      </router-link>
    </div>
  </q-page>
</template>

<script>
import PageOutfitSelect from "./PageOutfitSelect";
import Axios from "axios";
import { JS } from "aws-amplify";
export default {
  mounted() {
    this.user_id = this.outfit[0];
    this.real_outfit = this.outfit.slice(1, this.outfit.length);
    console.log(
      ">>>user_id>>>",
      this.user_id,
      ">>>>real_outfit>>>>",
      this.real_outfit
    );
  },
  data() {
    return {
      user_id: null,
      outfit: null,
      real_outfit: null,
    };
  },
  created() {
    this.outfit = this.$route.params.outfit;
  },
  methods: {
    sendOutfit() {
      let params = {};
      this.real_outfit.forEach((element) => {
        console.log(">", element);
        let category;
        if (element.category_large == "상의") {
          category = "top";
        } else if (element.category_large == "하의") {
          category = "bottom";
        } else if (element.category_large == "아우터") {
          category = "outer";
        } else if (element.category_large == "한벌옷") {
          category = "one_piece";
        }
        params[category] = Number(element.clothes_id);
      });
      let params_send = JSON.stringify(params);
      console.log("params", params);
      Axios.post(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/outfit/" +
          this.user_id,
        params_send
      ).then((res) => {
        console.log("after click send btn", res);
      });
    },
  },
};
</script>
<style scoped>
.top {
  width: 50%;
  margin-top: 15%;
  margin-left: 15%;

  border-radius: 4px;
}
</style>