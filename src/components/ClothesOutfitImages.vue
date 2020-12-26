<template>
  <div class="q-pa-md" style="padding: 0">
    <!-- <div>{{ clothes.data.url }}</div> -->
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="pink-4"
          indicator-color="pink-4"
          align="justify"
          narrow-indicator
        >
          <q-tab name="top" label="상의" />
          <q-tab name="bottom" label="하의" />
          <q-tab name="outer" label="아우터" />
          <q-tab name="dress" label="원피스" />
        </q-tabs>

        <q-separator />

        <!-- top -->
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="top">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div class="col-4" v-for="item in top.data" :key="`none-${item}`">
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- bottom -->
          <q-tab-panel name="bottom">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div
                class="col-4"
                v-for="item in bottom.data"
                :key="`none-${item}`"
              >
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- outer -->
          <q-tab-panel name="outer">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div
                class="col-4"
                v-for="item in outer.data"
                :key="`none-${item}`"
              >
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- dress -->
          <q-tab-panel name="dress">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div
                class="col-4"
                v-for="item in dress.data"
                :key="`none-${item}`"
              >
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "ClothesOutfitImages",
  data() {
    return {
      tab: "top",
      top: null,
      bottom: null,
      outer: null,
      dress: null,
    };
  },

  props: {
    friendUserId: null,
  },

  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  mounted() {
    this.topClicked();
    this.bottomClicked();
    this.outerClicked();
    this.dressClicked();
  },
  methods: {
    async topClicked() {
      if (this.friendUserId != null) {
        console.log("not null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.top = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
            this.friendUserId +
            "/filter/top",
          reqHeader
        );
      } else {
        console.log("null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.top = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/filter/top",
          reqHeader
        );
      }
      console.log("top data >", this.top.data);
    },

    async bottomClicked() {
      if (this.friendUserId != null) {
        console.log("not null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.bottom = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
            this.friendUserId +
            "/filter/bottom",
          reqHeader
        );
      } else {
        console.log("null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.bottom = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/filter/bottom",
          reqHeader
        );
      }
      console.log("bottom data >", this.bottom.data);
    },
    async outerClicked() {
      if (this.friendUserId != null) {
        console.log("not null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.outer = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
            this.friendUserId +
            "/filter/outer",
          reqHeader
        );
      } else {
        console.log("null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.outer = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/filter/outer",
          reqHeader
        );
      }
      console.log("outer data >", this.outer.data);
    },
    async dressClicked() {
      if (this.friendUserId != null) {
        console.log("not null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.dress = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/" +
            this.friendUserId +
            "/filter/one_piece",
          reqHeader
        );
      } else {
        console.log("null");
        let reqHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: await this.idToken,
          },
        };
        this.dress = await Axios.get(
          "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/filter/one_piece",
          reqHeader
        );
      }
      console.log("dress data >", this.dress.data);
    },
  },
};
</script>