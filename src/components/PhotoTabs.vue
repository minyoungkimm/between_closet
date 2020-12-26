<template>
  <div>
    <div class="q-gutter-y" style="max-width: 800px">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        indicator-color="pink-4"
        align="justify"
        narrow-indicator
      >
        <q-tab name="outfit" label="코디" />
        <q-tab name="clothes" label="옷" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="panel" name="outfit">
          <div class="q-px-lg q-pb-md">
            <q-timeline color="secondary">
              <q-timeline-entry
                title="2020년 12월 22일"
                subtitle="좋아요 2개"
              >
                <div>
                  <img style="max-width: 80%; margin-top: 20%" src="https://clothes-photo.s3.amazonaws.com/Screen+Shot+2020-12-23+at+7.56.43+AM.png" />
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="2020년 12월 18일"
                subtitle="좋아요 10개"
                icon="delete"
              >
                <img style="max-width: 80%; margin-top: 20%" src="https://clothes-photo.s3.amazonaws.com/Screen+Shot+2020-12-23+at+7.58.55+AM.png" />
              </q-timeline-entry>
              <q-timeline-entry
                title="2020년 12월 16일"
                subtitle="좋아요 0개"
                icon="delete"
              >
                <img style="max-width: 80%; margin-top: 20%" src="https://clothes-photo.s3.amazonaws.com/Screen+Shot+2020-12-23+at+8.16.28+AM.png" />
              </q-timeline-entry>
              <q-timeline-entry
                title="2020년 12월 15일"
                subtitle="좋아요 0개"
                icon="delete"
              >
                <img style="max-width: 80%; margin-top: 20%" src="https://clothes-photo.s3.amazonaws.com/Screen+Shot+2020-12-23+at+7.58.18+AM.png" />
              </q-timeline-entry>
            </q-timeline>
          </div>
        </q-tab-panel>
        <q-tab-panel class="panel" name="clothes">
          <clothes-outfit-images :friendUserId="this.friend_info_user_id" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import ClothesOutfitImages from "src/components/ClothesOutfitImages.vue";
import OutfitImages from "./OutfitImages.vue";

export default {
  name: "PhotoTabs",
  components: {
    ClothesOutfitImages,
    OutfitImages,
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      console.log(
        ">>>>>>>>pageFriendSearch -> Phototab >>>",
        this.friend_info_user_id
      );
    },
  },

  data() {
    return {
      tab: "outfit",
      friend_info_user_id: null,
    };
  },
  created() {
    this.friend_info_user_id = this.$route.params.friend_info.user_id;
  },
};
</script>
<style scoped>
.panel {
  margin: 0px;
  padding: 0px;
}
</style>