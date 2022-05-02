import TwtCardComponent from './twt-card-component.js';

export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  components: { TwtCardComponent },
  template: `
  <h1>{{ message }}</h1>
  <TwtCardComponent />
  `
}
