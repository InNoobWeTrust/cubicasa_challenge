import TwtCardComponent from "./twt-card-component.js";
import SearchComponent from "./search-component.js";

export default {
  data() {
    return {
      message: "Geting 3 latest tweets from some user!",
      tweets: [],
      script: null,
    };
  },
  methods: {
    async getTweets(screen_name) {
      return await fetch(
        `${location.protocol}//${location.host}/api/${screen_name}/tweets/`
      ).then((res) => res.json());
    },
    // Little hack, must load twitter widget script after content is loaded
    renderWidget() {
      if (this.script) {
        document.head.removeChild(this.script);
        // Remove rendered twitter cards
        document
          .querySelectorAll(".twitter-tweet.twitter-tweet-rendered")
          .forEach((el) => el.parentElement.removeChild(el));
      }
      this.script = document.createElement("script");
      this.script.async = true;
      this.script.src = "/static/widgets.js";
      this.script.charset = "utf-8";
      document.head.appendChild(this.script);
    },
    async onSearch(screen_name) {
      try {
        const tweets = await this.getTweets(screen_name);
        this.tweets = tweets;
        this.renderWidget();
      } catch {
        console.debug("Not found");
      }
    },
  },
  async mounted() {
    await this.onSearch('CasaCubi');
  },
  unmounted() {
    // Ensure cleanup on destruction
    document.head.removeChild(this.script);
    this.script = null;
  },
  components: { SearchComponent, TwtCardComponent },
  template: `
  <h1>{{ message }}</h1>
  <SearchComponent @search="onSearch"/>
  <TwtCardComponent v-for="tweet in tweets" :key="tweet.id_str" :tweet="tweet" />
  `,
};
