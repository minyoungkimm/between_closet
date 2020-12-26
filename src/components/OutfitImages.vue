<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry
        v-for="(item, idx) in this.outfit_date"
        :key="`none-${idx}`"
      >
        <template v-slot:title>{{ item }} </template>
        <template v-slot:subtitle> 좋아요 </template>
      </q-timeline-entry>

      <div v-for="item in this.user_outfit" :key="`none-${item}`">
        <img
          style="
            max-width: 50%;
            min-width: 50%;
            margin-top: 10%;
            margin-left: 5%;
            float: left;
            border: 1px;
          "
          :src="item.top"
        />

        <img style="max-width: 30%; margin-top: 20%" :src="item.outer" />
        <img style="max-height: 200px; margin-left: 30%" :src="item.bottom" />
      </div>
    </q-timeline>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "OutfitImages",
  data() {
    return {
      // outfit_res: { type: Array, default: () => [] },
      user_id: null,
      user_outfit: null,
      outfit_date: null,
    };
  },
  props: {
    friendUserId: null,
  },
  mounted() {
    if (this.friendUserId == null) {
      this.user_id = 1; // ★★★★★★★★★ 본인 아이디
    } else {
      this.user_id = this.friendUserId;
    }
    this.getOutfits();
  },
  created() {
    this.user_id = this.$route.params.user_id;
  },
  methods: {
    getOutfits() {
      console.log("in getOutfits");
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/outfit-clothes/" +
          this.user_id
      ).then((res) => {
        console.log(">>>>", res);
        this.user_outfit = res.data.outfit;
        this.outfit_date = res.data.date;
        // console.log("user_outfit(after get)", this.user_outfit[0].top);
      });
    },
  },
};
</script>