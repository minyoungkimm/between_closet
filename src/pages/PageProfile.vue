<template>
  <q-page>
    <user-profile />
    <photo-tabs class="ms" />
  </q-page>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import PhotoTabs from "../components/PhotoTabs.vue";
import ClothesOutfitImages from "src/components/ClothesOutfitImages.vue";

export default {
  name: "PageProfile",
  components: {
    PhotoTabs,
    ClothesOutfitImages,
    UserProfile,
  },
};
</script>
