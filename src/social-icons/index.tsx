type comptype = {
  [key: string]: string
}

const components: comptype = {
  mail: '/social-icons/mail.svg',
  github: '/social-icons/github.svg',
  facebook: '/social-icons/facebook.svg',
  linkedin: '/social-icons/linkedin.svg',
  twitter: '/social-icons/twitter.svg',
}

const SocialIcon = ({ kind, href, size = 8 }: any) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <>
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <img src={SocialSvg} alt="Logo" className={`fill-current text-gray-700 hover:text-blue-500 dark:bg-gray-100 dark:hover:bg-blue-400 h-${size} w-${size}`} />
      </a>
    </>
  )
}

export default SocialIcon
