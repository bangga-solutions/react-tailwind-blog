import Main from "./Main"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Projects = (props: any) => {

  const [data, setData] = useState([{
    client: [],
    _id: '',
    company: '',
    name: '',
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Projects?$lookup=*`)
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
      <Main title="Projects">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {data &&
              data.map(({ _id, name, company, client }) => (
              <div className="border-2 border-gray-300 rounded-lg pl-5 pr-5 pb-2 pt-2 w-full mb-2" key={_id}>
                <h2><strong>{name}</strong></h2>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="text-gray-500 dark:text-gray-100">Photos</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-100">Clients</span><br />
                    <span className="text-gray-900 dark:text-gray-100">
                      <ul className="list-none">
                        {client &&
                          client.map((c: any) => (
                            <li key={c._id}>{c.name}</li>
                          ))
                        }
                      </ul>
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-100">Company</span><br />
                    <span className="text-gray-900 dark:text-gray-100">{company}</span>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Main>
    </>
  )
}

export default Projects