import Main from "./Main"
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const About = (props: any) => {

  const [data, setData] = useState([{
    Posts: [],
    _id: '',
    name: '',
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/About?$lookup[_id]=*&$select[0]=name`)
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

  return <Main title="About">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About</h1>
</div>
<div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
  <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
    <p>Tails Azimuth is a professor of atmospheric sciences at the Stanford AI Lab. His research interests includes complexity modelling of tailwinds, headwinds and crosswinds.</p>
    <p>He leads the clean energy group which develops 3D air pollution-climate models, writes differential equation solvers, and manufactures titanium plated air ballons. In his free time he bakes raspberry pi.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.</p>
  </div>
</div>
  </Main>
}

export default About