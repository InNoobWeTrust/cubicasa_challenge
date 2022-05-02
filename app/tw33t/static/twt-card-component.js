const template = `
<div
  class="relative z-0 transition-all w-full card-holder is-dark-card"
  style="max-width: 39rem"
>
  <div
    class="absolute inset-0 card-blur-shadow"
    style="
      background-image: linear-gradient(
        150deg,
        rgb(95, 108, 138),
        rgb(48, 59, 94),
        rgb(14, 18, 38)
      );
      background-size: 820px 765px;
    "
  ></div>
  <div
    class="card select-none relative transition-all"
    style="overflow: hidden"
  >
    <div
      class="card-background-dark absolute inset-0"
      style="z-index: -1"
      leave-class="opacity-1"
    ></div>
    <div class="flex items-center pb-3">
      <img
        src="https://pbs.twimg.com/profile_images/1474360645596364817/9A7D8jOC.jpg"
        style="width: 3em; height: 3em; margin-right: 0.75em"
        class="inline object-cover rounded-full transition-all duration-150"
        alt="Profile image"
      />
      <div>
        <div
          class="flex"
          style="
            font-weight: 600;
            color: var(--textPrimary);
            line-height: 1.2;
          "
        >
          <div
            class="whitespace-nowrap"
            style="padding-right: 0.375em; font-size: 18px"
          >
            AnimeTV チェーン
          </div>
          <!---->
        </div>
        <div
          style="
            font-size: 1em;
            font-weight: 400;
            color: var(--textSecondary);
            line-height: 1.2;
          "
          class="whitespace-nowrap"
        >
          @animetv_jp<!---->
        </div>
      </div>
    </div>
    <div
      style="
        color: var(--twitterLogoColor);
        position: absolute;
        right: 1.25em;
        top: 1.25em;
      "
      class=""
    >
      <svg
        style="width: 2em; height: 2em"
        class="transition-all duration-150"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </div>
    <!----><!----><!----><!---->
    <div class="tweet-content" style="font-size: 1.4em">
      <div class="content" dir="auto" data-v-c29f868a="">
        【New Trailer】<br />My Isekai Life anime<br />Scheduled for this
        July!<br /><br />(Animation Production: REVOROOT)<br /><br />✨More:
        <a href="https://tenseikenja.com" target="_blank"
          >tenseikenja.com</a
        >
        <a href="https://" target="_blank"></a>
      </div>
      <div
        class="h-0 w-full relative overflow-hidden rounded-xl"
        style="padding-bottom: 50%; margin-top: 1em"
      >
        <div
          class="grid gap-0.5 overflow-hidden absolute inset-0 h-full"
          target="_blank"
        >
          <div
            style="
              background-image: url('https://pbs.twimg.com/ext_tw_video_thumb/1520933040721395712/pu/img/sC5MUAQzF2jaH0kV.jpg');
            "
            class="bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-20"
          style="width: 3.5em; height: 3.5em; padding: 0.25em"
        >
          <div
            class="w-full h-full flex items-center justify-center rounded-full"
          >
            <svg
              viewBox="0 0 24 24"
              style="fill: white; width: 50%; margin-left: 6%"
            >
              <g>
                <path
                  d="M20.436 11.37L5.904 2.116c-.23-.147-.523-.158-.762-.024-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.112.063.236.093.36.093.14 0 .28-.04.402-.117l14.53-9.248c.218-.138.35-.376.35-.633 0-.256-.132-.495-.348-.633z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <!----><!---->
    </div>
    <div>
      <div style="color: var(--textSecondary); padding-bottom: 0.5em">
        <span>8:22 PM · 2 May, 2022</span
        ><!----><!---->
      </div>
      <div class="flex">
        <div
          class="whitespace-nowrap"
          style="color: var(--textSecondary); margin-right: 1em"
        >
          <span class="font-medium" style="color: var(--textPrimary)"
            >17</span
          >
          replies
        </div>
        <div
          class="whitespace-nowrap"
          style="color: var(--textSecondary); margin-right: 1em"
        >
          <span class="font-medium" style="color: var(--textPrimary)"
            >52</span
          >
          shares
        </div>
        <div
          class="whitespace-nowrap"
          style="color: var(--textSecondary); margin-right: 1em"
        >
          <span class="font-medium" style="color: var(--textPrimary)"
            >342</span
          >
          likes
        </div>
      </div>
    </div>
  </div>
</div>
`

const template_embed = `
<blockquote class="twitter-tweet" data-theme="dark">
  <p lang="en" dir="ltr">
    {{ tweet }}
  </p>
  &mdash; {{ display_name }} (@{{ username }})
  <a
    :href="href"
    >{{ date }}</a
  >
</blockquote>
`

export default {
  data() {
    return {
      tweet: "In the context of learning ML, maths is not a barrier it&#39;s an opportunity.",
      display_name: "elvis",
      username: "omarsar0",
      href: "https://twitter.com/omarsar0/status/1521134765134336002",
      date: "May 2, 2022"
    }
  },
  template: template_embed,
};
