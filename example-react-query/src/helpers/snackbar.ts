import {
  createSnackbar,
  destroyAllSnackbars,
  SnackOptions,
  ThemeRules,
} from '@snackbar/core'

const defaultOptions: SnackOptions = {
  position: 'center',
  timeout: 2000,
  maxStack: 3,
}

const successTheme: ThemeRules = {
  actionColor: '#0d47a1',
  backgroundColor: '#2196f3',
  textColor: '#ffffff',
}

const failureTheme: ThemeRules = {
  actionColor: '#b71c1c',
  backgroundColor: '#f44336',
  textColor: '#ffffff',
}

export const snackbar = {
  destroyAll: destroyAllSnackbars,
  success: (message: string) =>
    createSnackbar(message, {
      ...defaultOptions,
      theme: successTheme,
    }),
  failure: (message: string) =>
    createSnackbar(message, {
      ...defaultOptions,
      theme: failureTheme,
      timeout: 0,
    }),
}
