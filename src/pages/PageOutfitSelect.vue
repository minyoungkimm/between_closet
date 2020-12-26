<template>
  <div class="q-pa-md banner" style="max-width: 450px">
    <q-banner
      style="text-align: center"
      inline-actions
      rounded
      class="bg-primary text-grey-9"
    >
      친구에게 코디 전송하기
    </q-banner>

    <q-list bordered style="margin-top: 20px">
      <q-expansion-item
        group="somegroup"
        icon="fas fa-tshirt"
        label="TOP"
        default-opened
        header-class="text-accent"
      >
        <div
          class="row q-col-gutter-x-xs q-col-gutter-y-lg"
          style="margin: 0; padding: 0"
        >
          <div class="col-4" v-for="item in top.data" :key="item.clothes_id">
            <div class="my-content">
              <q-card style="border-radius: 0; box-shadow: 0">
                <q-img :src="item.url" style="height: 100px" />
                <q-checkbox
                  size="sm"
                  v-model="selected"
                  :val="item"
                  :outfit="selected"
                  @input="checkOutfit()"
                />
              </q-card>
            </div>
          </div>
        </div>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="perm_identity"
        label="BOTTOM"
        header-class="text-accent"
      >
        <div
          class="row q-col-gutter-x-xs q-col-gutter-y-lg"
          style="margin: 0; padding: 0"
        >
          <div class="col-4" v-for="item in bottom.data" :key="item.clothes_id">
            <div class="my-content">
              <q-card style="border-radius: 0; box-shadow: 0">
                <q-img :src="item.url" style="height: 100px" />
                <q-checkbox
                  size="sm"
                  v-model="selected"
                  :val="item"
                  :outfit="selected"
                  @input="checkOutfit()"
                />
              </q-card>
            </div>
          </div>
        </div>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="shopping_cart"
        label="OUTER"
        header-class="text-accent"
      >
        <div
          class="row q-col-gutter-x-xs q-col-gutter-y-lg"
          style="margin: 0; padding: 0"
        >
          <div class="col-4" v-for="item in outer.data" :key="item.clothes_id">
            <div class="my-content">
              <q-card style="border-radius: 0; box-shadow: 0">
                <q-img :src="item.url" style="height: 100px" />
                <q-checkbox
                  size="sm"
                  v-model="selected"
                  :val="item"
                  :outfit="selected"
                  @input="checkOutfit()"
                />
              </q-card>
            </div>
          </div>
        </div>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        group="somegroup"
        icon="shopping_cart"
        label="ONE PIECE"
        header-class="text-accent"
      >
        <div
          class="row q-col-gutter-x-xs q-col-gutter-y-lg"
          style="margin: 0; padding: 0"
        >
          <div
            class="col-4"
            v-for="item in onepiece.data"
            :key="item.clothes_id"
          >
            <div class="my-content">
              <q-card style="border-radius: 0; box-shadow: 0">
                <q-img :src="item.url" style="height: 150px" />
                <q-checkbox
                  size="sm"
                  v-model="selected"
                  :val="item"
                  :outfit="selected"
                  @input="checkOutfit()"
                />
              </q-card>
            </div>
          </div>
        </div>
      </q-expansion-item>
    </q-list>
    <router-link :to="{ name: 'PageMakeCodi', params: { outfit: selected } }">
      <q-btn
        label="코디 전송하기"
        type="submit"
        :outfit="selected"
        class="submitbtn"
        style="color: black; width: 100%; margin-top: 3%"
    /></router-link>
  </div>
</template>
<script>
import Axios from "axios";
import { mapGetters } from "vuex";
import routes from "src/router";
export default {
  data() {
    return {
      tempVal: [false, false, false],
      top: null,
      bottom: null,
      outer: null,
      onepiece: null,
      selected: [],
      friend_user_id: null,
      my_user_id: 2, // ★★★★★ 본인 아이디 넣기 ★★★★★
    };
  },
  created() {
    this.friend_user_id = this.$route.params.friend_id;
  },
  mounted() {
    this.getTop(), this.getBottom(), this.getOuter(), this.getOnePiece();
    if (this.friend_user_id == null) {
      console.log("fdf");
      this.selected.push(this.my_user_id);
    } else {
      this.selected.push(this.friend_user_id);
    }
  },
  methods: {
    getTop() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/top"
      ).then((res) => {
        console.log(res);
        this.top = res;
      });
      console.log("finished");
    },
    getBottom() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/bottom"
      ).then((res) => {
        console.log(res);
        this.bottom = res;
      });
      console.log("finished");
    },
    getOuter() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/outer"
      ).then((res) => {
        console.log(res);
        this.outer = res;
      });
      console.log("finished");
    },
    getOnePiece() {
      if (this.friend_user_id == null) {
        this.user_id = this.my_user_id;
      } else {
        this.user_id = this.friend_user_id;
      }
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
          this.user_id +
          "/filter/one_piece"
      ).then((res) => {
        console.log(res);
        this.onepiece = res;
      });
      console.log("finished");
    },
    checkOutfit() {
      console.log(this.selected);
    },
  },
};
</script>
<style scoped>
.submitbtn {
  margin-top: 20px;
  width: 150px;
  background-color: #eee2dc;
  align-self: right;
}

.banner {
  margin-bottom: 50px;
}
</style>