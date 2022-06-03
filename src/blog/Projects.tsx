import Main from "./Main"
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Projects = (props: any) => {

  const [data, setData] = useState([{
    Posts: [],
    _id: '',
    name: '',
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Tags?$lookup[_id]=*&$select[0]=name`)
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
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Showcase your projects with a hero image (16 x 9)</p>
    </div>
    <div className="container py-12">
      <div className="-m-4 flex flex-wrap">
        
      </div>
    </div>
  </Main>
}

export default Projects