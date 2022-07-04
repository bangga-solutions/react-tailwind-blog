import { useEffect } from "react"
import Page from "./Page"
import ThemeSwitch from "./ThemeSwitch"
import { Link } from "react-router-dom";
import headerNavLinks from '../data/headerNavLinks'
import siteMetaData from '../data/siteMetaData'
import MobileNav from './MobileNav'
import SocialIcon from '../social-icons'

const Main = (props: any) => {

  useEffect(() => {
    document.title = `${props.title} - GW's Blog`
    window.scrollTo(0, 0)
    document.body.style.overflow = 'auto'
  }, [props.title])

  return (
    <Page>
      <header className="flex items-center justify-between py-10">
        <div>
          <Link aria-label="GW's Blog" to="/">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <svg xmlns="  g" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="344.564 330.278 111.737 91.218" width="53.87" height="43.61">
                  <defs>
                    <linearGradient id="logo_svg__b" gradientUnits="userSpaceOnUse" x1="420.97" y1="331.28" x2="420.97" y2="418.5">
                      <stop style={{ stopColor: '#06b6d4', stopOpacity: '1' }} offset="0%"></stop>
                      <stop style={{ stopColor: '#67e8f9', stopOpacity: '1' }} offset="100%"></stop>
                    </linearGradient>
                    <linearGradient id="logo_svg__d" gradientUnits="userSpaceOnUse" x1="377.89" y1="331.28" x2="377.89" y2="418.5">
                      <stop style={{ stopColor: '#06b6d4', stopOpacity: '1' }} offset="0%"></stop>
                      <stop style={{ stopColor: '#67e8f9', stopOpacity: '1' }} offset="100%"></stop>
                    </linearGradient>
                    <path d="M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z" id="logo_svg__a"></path>
                    <path d="M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z" id="logo_svg__c"></path>
                  </defs>
                  <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)"></use>
                  <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)"></use>
                </svg>
              </div>
              <div className="hidden h-6 text-2xl font-semibold sm:block">GW's Blog</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main className="mb-auto">
        <div className="divide-y">
          {props.children}
        </div>
      </main>
      <footer>
        <div className="mt-16 flex flex-col items-center">

          <div className="mb-3 flex space-x-4">
            <div className="mb-3 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetaData.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetaData.github} size={6} />
              <SocialIcon kind="facebook" href={siteMetaData.facebook} size={6} />
              <SocialIcon kind="linkedin" href={siteMetaData.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetaData.twitter} size={6} />
            </div>
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{siteMetaData.author}</div>
            <div> • </div>
            <div>© 2022</div>
            <div> • </div>
            <a href="/">GW's Blog</a>
          </div>
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/guguswidiandito">{siteMetaData.author}</a>
          </div>
        </div>
      </footer>
    </Page>
  )
}

export default Main