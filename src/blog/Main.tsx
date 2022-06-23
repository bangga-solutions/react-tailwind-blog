import { useEffect } from "react"
import Page from "./Page"
import ThemeSwitch from "./ThemeSwitch"
import { Link } from "react-router-dom";

const Main = (props: any) => {
  
  useEffect(() => {
    document.title = `${props.title} - Gugus Widiandito's Blog`
    window.scrollTo(0, 0)
  }, [props.title])

  return <Page>
    <header className="flex items-center justify-between py-10">
      <div>
        <Link aria-label="Gugus Widiandito's Blog" to="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <svg xmlns="  g" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="344.564 330.278 111.737 91.218" width="53.87" height="43.61">
                <defs>
                  <linearGradient id="logo_svg__b" gradientUnits="userSpaceOnUse" x1="420.97" y1="331.28" x2="420.97" y2="418.5">
                    <stop style={{ stopColor:'#06b6d4', stopOpacity:'1' }} offset="0%"></stop>
                    <stop style={{ stopColor:'#67e8f9', stopOpacity:'1' }} offset="100%"></stop>
                  </linearGradient>
                  <linearGradient id="logo_svg__d" gradientUnits="userSpaceOnUse" x1="377.89" y1="331.28" x2="377.89" y2="418.5">
                    <stop style={{ stopColor:'#06b6d4', stopOpacity:'1' }} offset="0%"></stop>
                    <stop style={{ stopColor:'#67e8f9', stopOpacity:'1' }} offset="100%"></stop>
                  </linearGradient>
                  <path d="M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z" id="logo_svg__a"></path>
                  <path d="M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z" id="logo_svg__c"></path>
                </defs>
                <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)"></use>
                <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)"></use>
              </svg>
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">Gugus Widiandito's Blog</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          <a className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="mailto:guguswidiandito@gmail.com" target="blank">Hire me!</a>
          <Link className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" to="/blog">Blog</Link>
          <Link className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" to="/tags">Tag</Link>
          <Link className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" to="/projects">Projects</Link>
          <Link className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" to="/about">About</Link>
        </div>
        <ThemeSwitch />
        <div className="sm:hidden">
          <button type="button" className="ml-1 mr-1 h-8 w-8 rounded py-1" aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-900 dark:text-gray-100">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 translate-x-full">
            <div className="flex justify-end">
              <button type="button" className="mr-5 mt-11 h-8 w-8 rounded" aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-900 dark:text-gray-100">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <nav className="fixed mt-8 h-full">
              <div className="px-12 py-4">
                <a className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" href="mailto:guguswidiandito@gmail.com" target="blank">Hire me!</a>
              </div>
              <div className="px-12 py-4">
                <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" to="/blog">Blog</Link>
              </div>
              <div className="px-12 py-4">
                <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" to="/tags">Tags</Link>
              </div>
              <div className="px-12 py-4">
                <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" to="/projects">Projects</Link>
              </div>
              <div className="px-12 py-4">
                <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" to="/about">About</Link>
              </div>
            </nav>
          </div>
        </div>
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
          <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:guguswidiandito@gmail.com">
            <span className="sr-only">mail</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6">
              <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path>
              <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
            </svg>
          </a>
          <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/guguswidiandito">
            <span className="sr-only">github</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://facebook.com/guguswidiandito">
            <span className="sr-only">facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>
          <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guguswidiandito">
            <span className="sr-only">linkedin</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
          <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://twitter.com/guguswdito">
            <span className="sr-only">twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6">
              <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path>
            </svg>
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Gugus Widiandito</div>
          <div> • </div>
          <div>© 2022</div>
          <div> • </div>
          <a href="/">Gugus Widiandito's Blog</a>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/guguswidiandito">Gugus Widiandito</a>
        </div>
      </div>
    </footer>
  </Page>
}

export default Main