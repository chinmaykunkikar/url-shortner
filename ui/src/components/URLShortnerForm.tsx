import React, { useRef, useState } from "react";
import axios from "axios";
import clsx from 'clsx'
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { SERVER_ENDPOINT } from "../config";

export default function URLShortnerForm() {
  const [destination, setDestination] = useState<string>();
  const [shortId, setShortId] = useState<string>();
  const inputField = useRef<HTMLInputElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result: string = await axios
      .post(`${SERVER_ENDPOINT}/api/shortenurl`, {
        destination,
      })
      .then((res) => res.data?.shortId);
    setShortId(result);
  }

  const handleReset = (event: any) => {
    event.preventDefault();
    setDestination('')
    if(inputField.current)
    inputField.current.value='';
  };

  return (
    <div className='m-2 w-4/5 max-w-xl rounded-xl bg-white p-5 lg:w-2/3 xl:w-1/2 '>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <label
          className='mb-1 self-start text-sm font-medium leading-7 text-gray-700'
          htmlFor='url-input'>
          Enter a URL
        </label>

        <div className='relative flex w-full items-center text-gray-400'>
          <input
          ref={inputField}
            className='w-full pr-8 rounded-2xl border border-slate-300 bg-gray-100 bg-opacity-50 px-3 py-2
          text-sm placeholder-slate-400 shadow-sm invalid:border-rose-500 invalid:text-rose-600
          focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1
          focus:ring-sky-500 focus:invalid:border-rose-500 focus:invalid:ring-rose-500'
            id='url-input'
            type={"url"}
            placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            onChange={(input: React.ChangeEvent<HTMLInputElement>) =>
              setDestination(input.target.value)
            }
          />
          <XMarkIcon onClick={handleReset} className={clsx(destination ? 'absolute right-2 h-5 w-5\
          stroke-[3px] hover:stroke-red-500' : 'hidden')} />
        </div>
        <br />
        <button
          type='submit'
          disabled={!destination}
          className='inline-flex items-center rounded-lg bg-sky-500 py-2 px-3 text-center text-sm
          font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300
          disabled:hover:bg-gray-500 disabled:opacity-75 disabled:cursor-not-allowed'>
          Shorten Link
          <ArrowRightIcon className='h-6 w-6 pl-2' />
        </button>
        {shortId ? (
          <a
            className='mt-5 text-xl text-pink-500 decoration-sky-500/60 decoration-2 hover:underline'
            href={`${SERVER_ENDPOINT}/${shortId}`}>{`${SERVER_ENDPOINT}/${shortId}`}</a>
        ) : null}
      </form>
    </div>
  );
}
