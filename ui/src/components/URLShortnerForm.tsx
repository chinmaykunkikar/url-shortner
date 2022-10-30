import React, { useState } from "react";
import axios from "axios";
import { SERVER_ENDPOINT } from "../config";

export default function URLShortnerForm() {
  const [destination, setDestination] = useState();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await axios
      .post(`${SERVER_ENDPOINT}/api/shortenurl`, {
        destination,
      })
      .then((res) => res.data);
    console.log(result);
  }

  return (
    <div className='m-2 w-4/5 max-w-xl rounded-xl bg-white p-5 lg:w-2/3 xl:w-1/2 '>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <label
          className='mb-1 self-start text-sm font-medium leading-7 text-gray-700'
          htmlFor='url-input'>
          Enter a URL
        </label>
        <input
          className='w-full rounded-md border border-slate-300 bg-gray-100 bg-opacity-50 px-3 py-2 text-sm placeholder-slate-400 shadow-sm
          invalid:border-rose-500 invalid:text-rose-600 focus:border-sky-500 focus:bg-white focus:outline-none
        focus:ring-1 focus:ring-sky-500
        focus:invalid:border-rose-500 focus:invalid:ring-rose-500'
          id='url-input'
          type={"url"}
          placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          onChange={(input: any) => setDestination(input.target.value)}></input>
        <br />
        <button
          type='submit'
          className='inline-flex items-center rounded-lg bg-sky-500 py-2 px-3 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800'>
          Shorten Link
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 h-4 w-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'></path>
          </svg>
        </button>
      </form>
    </div>
  );
}