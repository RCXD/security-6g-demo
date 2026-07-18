import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-neutral-500 md:flex-row dark:text-neutral-400">
        <p>{t.footer.left}</p>
        <p className="text-neutral-400">{t.footer.right}</p>
      </div>
    </footer>
  )
}
