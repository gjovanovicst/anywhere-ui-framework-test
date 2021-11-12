<template>
  <div class="home" ref="root">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <AnyDropdown
      :options="cities"
      placeholder="Select value"
      v-model="ddValue"
      v-on:valuechange="onChangeCb"
    />
    <div>{{ this.ddValue1 }}</div>

    <br />
    <AnyCheckbox checked="true" label="Vue" ref="cb1" />
    <br />

    <div>
      <AnyCheckbox
        ref="cb"
        v-for="entry in form"
        :name="entry.val"
        :label="entry.val"
        v-model="entry.isChecked"
        @valuechange="onChangeCb"
      ></AnyCheckbox>
    </div>
    <div>{{ this.form }}</div>

    <AnyButton label="Submit"></AnyButton>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { AnyCheckbox, AnyDropdown, AnyButton } from "@anywhere-ui/vue";

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    AnyButton,
    AnyCheckbox,
    AnyDropdown,
  },
  methods: {
    onChangeCb($event: any) {
      console.log($event);
    },
  },

  data() {
    return {
      // ddValue1: {
      //   id: 8,
      //   name: "Madrid",
      //   code: "MAD",
      //   countryCode: "ES",
      //   country: "Spain",
      // },
      form: [
        { val: "Pepperoni", isChecked: true },
        { val: "Sausage", isChecked: false },
        { val: "Mushroom", isChecked: false },
      ],
      cities: [
        {
          label: "New York",
          value: {
            id: 1,
            name: "New York",
            code: "NY",
            countryCode: "US",
            country: "USA",
          },
        },
        {
          label: "Rome",
          value: {
            id: 2,
            name: "Rome",
            code: "RM",
            countryCode: "IT",
            country: "Italy",
          },
        },
        {
          label: "London",
          value: {
            id: 3,
            name: "London",
            code: "LDN",
            countryCode: "GB",
            country: "England",
          },
        },
        {
          label: "Istanbul",
          value: {
            id: 4,
            name: "Istanbul",
            code: "IST",
            countryCode: "TR",
            country: "Turkey",
          },
        },
        {
          label: "Paris",
          value: {
            id: 5,
            name: "Paris",
            code: "PRS",
            countryCode: "FR",
            country: "France",
          },
        },
        {
          label: "Belgrade",
          value: {
            id: 6,
            name: "Belgrade",
            code: "BGD",
            countryCode: "RS",
            country: "Serbia",
          },
        },
        {
          label: "Tokyo",
          value: {
            id: 7,
            name: "Tokyo",
            code: "TOK",
            countryCode: "JP",
            country: "Japan",
          },
        },
        {
          label: "Madrid",
          value: {
            id: 8,
            name: "Madrid",
            code: "MAD",
            countryCode: "ES",
            country: "Spain",
          },
        },
      ],
    };
  },

  setup() {
    const root = ref(null);
    const cb1 = ref(null);
    const ddValue = null;
    // const onChange = ($event: any) => {
    //   console.log($event);
    // };
    const form = ref([
      { val: "Pepperoni", isChecked: true },
      { val: "Sausage", isChecked: false },
      { val: "Mushroom", isChecked: false },
    ]);

    // const cities = [
    //   {
    //     label: "New York",
    //     value: {
    //       id: 1,
    //       name: "New York",
    //       code: "NY",
    //       countryCode: "US",
    //       country: "USA",
    //     },
    //   },
    //   {
    //     label: "Rome",
    //     value: {
    //       id: 2,
    //       name: "Rome",
    //       code: "RM",
    //       countryCode: "IT",
    //       country: "Italy",
    //     },
    //   },
    //   {
    //     label: "London",
    //     value: {
    //       id: 3,
    //       name: "London",
    //       code: "LDN",
    //       countryCode: "GB",
    //       country: "England",
    //     },
    //   },
    //   {
    //     label: "Istanbul",
    //     value: {
    //       id: 4,
    //       name: "Istanbul",
    //       code: "IST",
    //       countryCode: "TR",
    //       country: "Turkey",
    //     },
    //   },
    //   {
    //     label: "Paris",
    //     value: {
    //       id: 5,
    //       name: "Paris",
    //       code: "PRS",
    //       countryCode: "FR",
    //       country: "France",
    //     },
    //   },
    //   {
    //     label: "Belgrade",
    //     value: {
    //       id: 6,
    //       name: "Belgrade",
    //       code: "BGD",
    //       countryCode: "RS",
    //       country: "Serbia",
    //     },
    //   },
    //   {
    //     label: "Tokyo",
    //     value: {
    //       id: 7,
    //       name: "Tokyo",
    //       code: "TOK",
    //       countryCode: "JP",
    //       country: "Japan",
    //     },
    //   },
    //   {
    //     label: "Madrid",
    //     value: {
    //       id: 8,
    //       name: "Madrid",
    //       code: "MAD",
    //       countryCode: "ES",
    //       country: "Spain",
    //     },
    //   },
    // ];

    return { root, form, ddValue, cb1 /*, cities*/ };
  },
});
</script>
