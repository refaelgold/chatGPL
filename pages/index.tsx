import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from "react";


export default function Home() {
    const [WindowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    });

    return (
    <>
      <Head>
        <title>chatGPL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="justify-center md:w-1/2 m-auto">
          <Image
              className='mt-10 mx-3'
              src='/OpenAI_Logo.svg'
              alt="Picture of the author"
              width={WindowWidth > 1280 ?  1280 : 200}
              height={WindowWidth > 1280 ? 314 : 226}
          />

          <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">

                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                          <p className="mt-2 text-sm text-gray-500">
                              Brief description for your profile. URLs are hyperlinked.
                          </p>
                          <div>
                              <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                                  Ask A Question
                              </label>
                              <div className="mt-1">
                                  <textarea
                                      id="question"
                                      name="question"
                                      rows={3}
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                      placeholder="Ask whatever you wish to ask for"
                                      defaultValue={''}
                                  />
                              </div>
                          </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                          <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-shinypurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                              Save
                          </button>
                      </div>
                  </div>
              </form>
          </div>
      </main>
    </>
  )
}
