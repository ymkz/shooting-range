import { Link } from 'wouter'
import { IconLogo } from '~/components/icon-logo'
import style from '~/styles/components/header.module.css'

export function Header() {
  return (
    <header className={style.outer}>
      <div className={style.inner}>
        <IconLogo width={24} height={24} />
        <div className={style.nav}>
          <Link to="/" className={style.navItem}>
            Home
          </Link>
          <Link to="/about" className={style.navItem}>
            About
          </Link>
          <Link to="/error" className={style.navItem}>
            Error
          </Link>
        </div>
      </div>
    </header>
  )
}
