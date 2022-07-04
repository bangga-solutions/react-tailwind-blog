import Main from "./Main"
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Parser from 'html-react-parser';
import { DiscussionEmbed, CommentEmbed } from 'disqus-react';

const SinglePost = (props: any) => {

  const params = useParams()

  const [data, setData] = useState([{
    categories: [],
    tags: [],
    _id: '',
    desc: '',
    title: '',
    created_at: '',
    slug: '',
    content: '',
    status: false,
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (date: string) => {
    var d = new Date(date)
    
    return d.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  useEffect(() => {
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Posts?$lookup=*&slug=${params.slug}&$sort[created_at]=-1`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      console.log(err.message)
      setError(err.message);
      setData([]);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Main title={data[0].title}>
        {data && data.length &&
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <article>
              <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                  <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                      <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={ data[0].created_at }>{ formatDate(data[0].created_at) }</time>
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">{ data[0].title }</h1>
                    </div>
                  </div>
                </header>
                <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0" style={{gridTemplateRows: 'auto 1fr'}}>
                  <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                    <dt className="sr-only">Authors</dt>
                    <dd>
                      <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                        <li className="flex items-center space-x-2">
                          <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                            <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                              <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20
                                xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e" style={{display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}} />
                            </span>
                            <img alt="avatar" src="https://avatars.githubusercontent.com/u/12388871?v=4&amp;w=96&amp;q=75" decoding="async" data-nimg="intrinsic" className="h-10 w-10 rounded-full" srcSet="https://avatars.githubusercontent.com/u/12388871?v=4&amp;w=48&amp;q=75 1x, https://avatars.githubusercontent.com/u/12388871?v=4&amp;w=96&amp;q=75 2x" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />
                            <noscript></noscript>
                          </span>
                          <dl className="whitespace-nowrap text-sm font-medium leading-5">
                            <dt className="sr-only">Name</dt>
                            <dd className="text-gray-900 dark:text-gray-100">Gugus Widiandito</dd>
                            <dt className="sr-only">Twitter</dt>
                            <dd>
                              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/guguswdito" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">@guguswdito</a>
                            </dd>
                          </dl>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none pt-10 pb-8 dark:prose-dark mb-2">
                      { Parser(data[0].content) }
                    </div>
                    <DiscussionEmbed
                        shortname='guguswidiandito'
                        config={
                            {
                                url: `https://guguswidiandito.com/${params.slug}`,
                                identifier: data[0]._id,
                                title: data[0].title,
                                language: 'en_US'
                            }
                        }
                    />
                  </div>
                  <footer>
                    <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                      <div className="py-4 xl:py-8">
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
                        <div className="flex flex-wrap">
                          {data[0].tags &&
                            data[0].tags.map(({ _id, name }) => (
                              <Link key={_id} className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" to={{
                                pathname: `/tags/${name}`
                              }}>{name}</Link>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                        {/* <div>
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Previous Article</h2>
                          <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            <a href="/blog/github-markdown-guide">Markdown Guide</a>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Next Article</h2>
                          <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                            <a href="/blog/deriving-ols-estimator">Deriving the OLS Estimator</a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="pt-4 xl:pt-8">
                      <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" to="/blog">← Back to the blog</Link>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        }
      </Main>
    </>
  )
}

export default SinglePost