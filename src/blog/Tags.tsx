import Main from "./Main"
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Tags = (props: any) => {

  const [data, setData] = useState([{
    Posts: [],
    _id: '',
    name: '',
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Tags?$select[0]=name&$select[1]=_id&$select[2][Posts][$lookup]=*`)
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

  return <Main title="Tags">
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">Tags</h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {data &&
          data.map(({ _id, name, Posts }) => (
            <div className="mt-2 mb-2 mr-5" key={_id}>
              <Link className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" to={{
                pathname: `/tags/${name}`
              }}>{name}</Link>
              <Link className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300" to={{
                pathname: `/tags/${name}`
              }}> ({Posts.length})</Link>
            </div>
          ))}
      </div>
    </div>
  </Main>
}

export default Tags