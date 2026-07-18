import type { Locale, Messages } from './types'
import { en } from './locales/en'
import { ko } from './locales/ko'
import { es } from './locales/es'
import { de } from './locales/de'

export type { Locale, Messages }
export const LOCALES: Locale[] = ['en', 'ko', 'es', 'de']
export const LOCALE_STORAGE_KEY = 'demo-locale'
export const LOCALE_CHOSEN_KEY = 'demo-locale-chosen'

export const messages: Record<Locale, Messages> = { en, ko, es, de }

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'ko' || value === 'es' || value === 'de'
}

export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`))
}
