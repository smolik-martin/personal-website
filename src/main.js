import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

// Detailed global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global Vue Error:', {
    error: err,
    component: instance,
    info: info,
    stack: err.stack
  })
}

// More comprehensive unhandled promise rejection handler
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled Promise Rejection:', {
    reason: event.reason,
    promise: event.promise
  })
})

// Add router error handling
router.onError((error) => {
  console.error('Router Navigation Error:', {
    error: error,
    stack: error.stack
  })
})

app.use(router)
app.mount('#app')
