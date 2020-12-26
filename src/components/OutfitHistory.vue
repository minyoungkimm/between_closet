<template>
  <outfit-images />
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
import OutfitImages from "./OutfitImages.vue";

export default {
  components: { OutfitImages },
  name: "OutfitHistory",
  data() {
    return {
      tab: "top",
      clothes: null,
      clothesList: { type: Array, default: () => [] },
    };
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  mounted() {
    this.clothesClicked();
  },
  methods: {
    async clothesClicked() {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.clothes = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes",
        reqHeader
      );
      console.log(this.clothes.data);
    },
    topClicked() {},
    bottomClicked() {},
    outerClicked() {},
    dressClicked() {
      console.log("ee");
    },
  },
};
</script>
<style scoped>
.q-gutter-y-md,
.q-gutter-md {
  margin-top: 0;
}
</style>