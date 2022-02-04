export const ErrorCode = {
  E_BOOK_NOT_FOUND: 'E_BOOK_NOT_FOUND',
  E_TODO_NOT_FOUND: 'E_TODO_NOT_FOUND',
  E_UNKNOWN: 'E_UNKNOWN',
} as const

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode]
