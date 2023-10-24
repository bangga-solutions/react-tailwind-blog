import Main from "./Main"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface myProps {

}

interface myState {
  client: object[],
  _id: string,
  company: string,
  name: string
}

const Projects = (props: myProps) => {

  const [data, setData] = useState<myState[]>([
    {
      client: [
        {
          _id: '1',
          name: 'PT Aneka Tambang Tbk',
        },
        {
          _id: '2',
          name: 'Perum Peruri',
        },
        {
          _id: '3',
          name: 'PT Waskita Karya (Persero) Tbk',
        },
        {
          _id: '4',
          name: 'PT Pelabuhan Indonesia (Persero)',
        },
        {
          _id: '5',
          name: 'PT Indonesia Asahan Aluminium (INALUM)',
        },
        {
          _id: '6',
          name: 'Kementerian Perhubungan',
        },
      ],
      _id: '1',
      company: 'PT Tri Nindya Utama',
      name: 'Risk Management System',
    },
    {
      client: [
        {
          _id: '1',
          name: 'PT Bank Negara Indonesia (Persero) Tbk',
        },
        {
          _id: '2',
          name: 'PT Bank Raya Indonesia Tbk',
        },
        {
          _id: '3',
          name: 'PT Wijaya Karya (Persero) Tbk',
        },
        {
          _id: '4',
          name: 'PT Hutama Karya (Persero)',
        },
        {
          _id: '5',
          name: 'PT Indonesia Asahan Aluminium (INALUM)',
        },
        {
          _id: '6',
          name: 'BMKG',
        },
        {
          _id: '7',
          name: 'Kementerian Perhubungan',
        },
        {
          _id: '8',
          name: 'Kementerian Pertahanan',
        },
        {
          _id: '9',
          name: 'PT Asuransi Jiwasraya (Persero)',
        },
      ],
      _id: '2',
      company: 'PT Tri Nindya Utama',
      name: 'Audit Management System',
    },
    {
      client: [
        {
          _id: '1',
          name: 'PT Wijaya Karya (Persero) Tbk',
        },
        {
          _id: '2',
          name: 'PT Hutama Karya (Persero)',
        },
        {
          _id: '3',
          name: 'PT Waskita Karya (Persero) Tbk',
        },
      ],
      _id: '3',
      company: 'PT Tri Nindya Utama',
      name: 'KPKU Information System',
    },
    {
      client: [
        {
          _id: '1',
          name: 'PT Waskita Karya (Persero) Tbk',
        },
      ],
      _id: '4',
      company: 'PT Tri Nindya Utama',
      name: 'GCG Information System',
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`https://api.kontenbase.com/query/api/v1/09e0e71c-7f74-438c-8f7f-6cdc565a336a/Projects?$lookup=*`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((actualData) => {
  //       setData(actualData);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //       setError(err.message);
  //       setData([]);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      <Main title="Portfolio">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Portfolio</h1>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {data &&
              data.map(({ _id, name, company, client }: myState) => (
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