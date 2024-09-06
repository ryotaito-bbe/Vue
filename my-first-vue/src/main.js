import { createApp } from 'vue'
// リセットcss(サイト全体に反映)
import './reset.css'
// 各種コンポーネントのユニークスタイルを1ファイルに統合
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
