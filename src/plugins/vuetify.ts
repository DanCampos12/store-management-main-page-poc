import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/src/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#003D50',
        secondary: '#E6F4F1',
        accent: '#708d81',
        error: '#AD1457',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        action: '#E86C30',
        base: '#496363',
        'dark-primary': '#013436',
        offWhite: '#FCFCFC'
      },
      dark: {
        primary: '#003D50',
        secondary: '#E6F4F1',
        accent: '#82B1FF',
        error: '#AD1457',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        action: '#E86C30',
        base: '#496363',
        'dark-primary': '#013436'
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  }
})
