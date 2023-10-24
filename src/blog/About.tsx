import Main from "./Main"

interface myState {

}

const About = (props: myState) => {
  return (
    <Main title="About">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About</h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <p>Gugus Widiandito is a Web Developer with 4 years experience developing, maintaining enterprise web applications, design and developed over 27 advanced web applications from use cases and functional requirements, familiar with Laravel, Node, Vue, and React. and always willing to learn new tech stacks.</p>
        </div>
      </div>
    </Main>
  )
}

export default About