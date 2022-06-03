const Container = (props: any) => {
  return <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div className="flex h-screen flex-col justify-between">
      {props.children}
    </div>
  </div>
}

export default Container
