import Theme from 'vitepress/theme'
import Playground from '../components/Playground.vue'
import Features2 from '../components/Features2.vue'
import AGWHomeSponsors from '../components/AGWHomeSponsors.vue'
import Info from '../components/Info.vue'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('playground', Playground);
    app.component('features2', Features2);
    app.component('AGWHomeSponsors', AGWHomeSponsors);
    app.component('Info', Info);
  }
}