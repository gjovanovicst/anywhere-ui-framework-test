<template>
  <div class="home" ref="root">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <AnyDropdown
      :name="'test'"
      :options="cities"
      placeholder="Select value"
      v-model="ddValue1"
    />
    <div>{{ this.ddValue1 }}</div>
    <br />

    <div>
      <AnyCheckbox
        ref="cb"
        v-for="entry in form"
        :name="entry.val"
        :label="entry.val"
        v-model="entry.isChecked"
      ></AnyCheckbox>
    </div>
    <div>{{ this.form }}</div>
    <br />

    <AnyInputText v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <b /><br />
    <AnyRadioGroup name="testradio" v-model="testRadio">
      <AnyRadioButton value="test1" label="Test 1"></AnyRadioButton>
      <AnyRadioButton value="test2" label="Test 2"></AnyRadioButton>
      <AnyRadioButton value="test3" label="Test 3"></AnyRadioButton>
    </AnyRadioGroup>
    <p>Radio is: {{ testRadio }}</p>
    <br />

    <!-- <AnyInputNumber
      label="Test"
      v-model="numeralValue"
      show-buttons="true"
      mode="currency"
      currency="USD"
    />
    <p>Number is: {{ numeralValue }}</p> -->

    <br />
    <br />

    <AnyButton label="Submit"></AnyButton>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import {
  AnyCheckbox,
  AnyDropdown,
  AnyButton,
  AnyInputText,
  AnyRadioButton,
  AnyRadioGroup,
  // AnyInputNumber,
} from "@anywhere-ui/vue";

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    AnyButton,
    AnyCheckbox,
    AnyDropdown,
    AnyInputText,
    AnyRadioButton,
    AnyRadioGroup,
    // AnyInputNumber,
  },
  methods: {
    onChangeCb($event: any) {
      console.log($event);
    },
  },

  data() {
    return {
      testRadio: "test2",
      numeralValue: 5001,
      message: "Goran",
      // ddValue1: {
      //   // id: 8,
      //   // name: "Madrid",
      //   // code: "MAD",
      //   // countryCode: "ES",
      //   // country: "Spain",
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
    const ddValue1 = ref("");
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

    return { root, form, ddValue1, cb1 /*, cities*/ };
  },
});
</script>
