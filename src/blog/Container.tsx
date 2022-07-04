const Container = (props: any) => {
  return (
    <div className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white h-full">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex h-screen flex-col justify-between">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Container
