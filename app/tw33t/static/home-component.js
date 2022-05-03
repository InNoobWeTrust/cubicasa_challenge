import TwtCardComponent from './twt-card-component.js';

export default {
  data() {
    return {
      message: 'Geting 3 latest tweets from some dude!',
      tweets: [],
      script: null,
    }
  },
  methods: {
    async getTweets(screen_name) {
      const tweets = await fetch(`${location.protocol}//${location.host}/api/${screen_name}/tweets`).then(res => res.json());
      return tweets;
    }
  },
  async mounted() {
    this.tweets = await this.getTweets('elonmusk');
    // Little hack, must load twitter widget script after content is loaded
    this.script = document.createElement('script')
    this.script.async = true;
    this.script.src = '/static/widgets.js';
    this.script.charset = 'utf-8';
    document.head.appendChild(this.script);
  },
  unmounted() {
    // Ensure cleanup on destruction
    document.head.removeChild(this.script);
    this.script = null;
  },
  components: { TwtCardComponent },
  template: `
  <h1>{{ message }}</h1>
  <TwtCardComponent v-for="tweet in tweets" :tweet="tweet" />
  `
}
