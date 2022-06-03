import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import Main from "./Main"

const Blog = (props: any) => {

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
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
  }

  useEffect(() => {
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Posts?$lookup[0]=tags&$lookup[1]=categories&$select[0]=title&$select[1]=content&$select[2]=status&$select[3]=created_at&$select[4]=photos&$select[5]=slug&$select[6]=desc`)
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

  return <Main title="Blog">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Posts</h1>
      <div className="relative max-w-lg">
        <input aria-label="Search articles" type="text" placeholder="Search articles" className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"/>
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
                      <time dateTime="2021-08-07T15:32:14.000Z">{ formatDate(d.created_at) }</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a className="text-gray-900 dark:text-gray-100" href="/blog/new-features-in-v1">{ d.title }</a>
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
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">{ d.desc }</div>
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