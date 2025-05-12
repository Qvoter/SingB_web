import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const NavBar = () => {
  const { t } = useTranslation('common')
  const { locale, push } = useRouter()

  const toggleLocale = (newLocale: string) => {
    push('/', '/', { locale: newLocale })
  }

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">{t('home', 'Главная')}</Link>
        </li>
        <li>
          <Link href="/about">{t('about', 'О проекте')}</Link>
        </li>
        <li>
          <Link href="/tech">{t('tech', 'Технологии')}</Link>
        </li>
        <li>
          <Link href="/investors">{t('investors', 'Для инвесторов')}</Link>
        </li>
        <li>
          <Link href="/contacts">{t('contacts', 'Контакты')}</Link>
        </li>
        <li>
          <Link href="/blog">{t('blog', 'Блог')}</Link>
        </li>
        <li>
          <Link href="/dashboard">{t('dashboard', 'Личный кабинет')}</Link>
        </li>
      </ul>
      <div className="mt-4">
        <button onClick={() => toggleLocale(locale === 'ru' ? 'en' : 'ru')}>
          {locale === 'ru' ? 'Switch to English' : 'Переключиться на русский'}
        </button>
      </div>
    </nav>
  )
}

export default NavBar
