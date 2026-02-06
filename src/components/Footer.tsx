interface FooterProps {
  t: (key: string, params?: Record<string, string>) => string
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 px-4 py-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
      {t('footer.copyright', { year: String(new Date().getFullYear()) })}
    </footer>
  )
}
