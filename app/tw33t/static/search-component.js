import { customRef } from "vue";

const searchIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
<path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
/></svg>
`;

const template = `
<div :style="containerStyle">
  <input :style="inputStyle" v-model.trim="screen_name" type="search" placeholder="Enter user handle" />
  <div :style="searchIconStyle">
    ${searchIcon}
  </div>
</div>
`;

const containerStyle = {
  position: "relative",
  height: "2rem",
  width: "32rem",
};

const inputStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
};

const searchIconStyle = {
  position: "absolute",
  top: "0.25rem",
  right: "0.25rem",
  opacity: "0.5",
  width: "1.5rem",
  height: "1.5rem",
};

export default {
  data() {
    return {
      screen_name: this.useDebouncedRef(""),
      containerStyle,
      inputStyle,
      searchIconStyle,
      timeout: undefined,
    };
  },
  emits: ["search"],
  methods: {
    search() {
      if (this.screen_name) {
        console.debug(this.screen_name);
        this.$emit("search", this.screen_name);
      }
    },
    useDebouncedRef(value, delay = 200) {
      return customRef((track, trigger) => {
        return {
          get: () => {
            track();
            return value;
          },
          set: (newValue) => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              value = newValue;
              trigger();
              this.search();
            }, delay);
          },
        };
      });
    },
  },
  template,
};
