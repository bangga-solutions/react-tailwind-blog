import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";

import Main from "./Main"

interface myProps {

}

const Blog = (props: myProps) => {

  type Posts = {
    categories: [];
    tags: [];
    _id: string;
    desc: string;
    title: string;
    created_at: string;
    slug: string;
    content: string;
    status: boolean;
  };

  const [data, setData] = useState<Posts[]>([]);
  const params = useParams()
  const history = useLocation()
  const formatDate = (date: string) => {
    let d = new Date(date)
    return d.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  const filterByTag = (tag: string, val: string, posts: Array<any>) => {
    let filteredPosts = posts.filter((item) => {
      return val ? item.tags.some((t: { name: string; }) => t.name===tag) && item.title.toLocaleLowerCase().includes(val.toLocaleLowerCase()) : item.tags.some((t: { name: string; }) => t.name===tag)
    })
    return filteredPosts
  }

  const getPostsByTag = (val: string) => {
    const tag: any = params.tag
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Posts?$select[0]=desc&$select[1]=slug&$select[2]=photos&$select[3]=updated_at&$select[4]=created_at&$select[5]=status&$select[6]=content&$select[7]=title&$select[8]=_id&$select[9][user][$lookup]=*&$select[10][tags][$lookup]=*&$select[11][categories][$lookup]=*`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      const filtered:any = filterByTag(tag, val, actualData)
      setData(filtered);
    })
  }

  useEffect(() => {
      getPostsByTag('')
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ history]);

  return <Main title={params.tag}>
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight capitalize text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">{params.tag}</h1>
      <div className="relative max-w-lg">
        <input aria-label="Search articles" type="text" placeholder="Search articles" onChange={(e) => getPostsByTag(e.target.value)} className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
        <svg className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {data &&
        data.map((d) => (
          <li className="py-12" key={d._id}>
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime="2021-08-07T15:32:14.000Z">{formatDate(d.created_at)}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link className="text-gray-900 dark:text-gray-100" to={{
                          pathname: `/blog/${d.slug}`
                        }}>{d.title}</Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {d.tags &&
                          d.tags.map(({ _id, name }) => (
                            <Link key={_id} className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" to={{
                              pathname: `/tags/${name}`
                            }}>{name}</Link>
                          ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">{d.desc}</div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" to={{
                      pathname: `/blog/${d.slug}`
                    }}>Read more →</Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
    </ul>
  </Main>
}

export default Blog