const template = `
<blockquote class="twitter-tweet" data-theme="dark">
  <p lang="en" dir="ltr">
  {{ tweet.text }}
  </p>
  &mdash; {{ tweet.user.name }} (@{{ tweet.user.screen_name }})
  <a
    :href="'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str"
    >{{ formatDate(tweet.created_at) }}</a
  >
</blockquote>
`

export default {
  props: ['tweet'],
  data() {
    return {
      created_at: "Tue May 03 13:04:04 +0000 2022",
      id_str: "1521475679027482624",
      text: "Doctor Strange in the Multiverse of Madness Is Exactly That: Multiple Levels of Mad https://t.co/b3sBhHOmYo https://t.co/lV0ETlYY6x",
      user: {
        name: "Gizmodo",
        screen_name: "Gizmodo",
      },
    }
  },
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr);
      const dateItems = d.toDateString().split(' ').slice(1);
      dateItems[1] = Number(dateItems[1]) + ',';
      return dateItems.join(' ');
    },
  },
  template,
};
