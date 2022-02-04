import dayjs from 'dayjs'
import { pino } from 'pino'

export const logger = pino({
  base: undefined,
  timestamp: () => {
    return `,"time":"${dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS')}"`
  },
  formatters: {
    level: (label) => {
      return { level: label }
    },
  },
})
