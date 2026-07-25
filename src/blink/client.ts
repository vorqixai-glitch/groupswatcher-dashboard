import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'groups-watcher-app-od7z3269',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_YWshohjprmlrrM-AlqmiQQoCgDS1-I6c',
  authRequired: false,
  auth: { mode: 'managed' },
})
