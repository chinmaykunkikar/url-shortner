import React, { createRef, useRef, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { SERVER_ENDPOINT } from "../config";
import Button from "./Button";
import Input from "./Input";

export default function URLShortnerForm() {
  const [destination, setDestination] = useState<string>();
  const [shortId, setShortId] = useState<string>();
  const inputFieldRef = createRef<HTMLInputElement>();

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
    setDestination("");
    if (inputFieldRef.current) inputFieldRef.current.value = "";
  };

  return (
    <div className='m-2 w-4/5 max-w-xl p-5 lg:w-2/3 xl:w-1/2 '>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <Input
          ref={inputFieldRef}
          inputid='url-input'
          label='Enter a URL'
          type='url'
          placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          onChangeHandler={(input: React.ChangeEvent<HTMLInputElement>) =>
            setDestination(input.target.value)
          }
          inputicon={
            <XMarkIcon
              onClick={handleReset}
              className={clsx(
                destination
                  ? "absolute right-2 h-5 w-5 stroke-[3px] hover:stroke-red-500"
                  : "hidden"
              )}
            />
          }
        />
        <br />
        <Button
          disabled={!destination}
          btntext={"Shorten Link"}
          btnicon={<ArrowRightIcon className='h-6 w-6 pl-2' />}
        />
        {shortId ? (
          <a
            className='mt-5 text-xl text-pink-500 decoration-sky-500/60 decoration-2 hover:underline'
            href={`${SERVER_ENDPOINT}/${shortId}`}>{`${SERVER_ENDPOINT}/${shortId}`}</a>
        ) : null}
      </form>
    </div>
  );
}
