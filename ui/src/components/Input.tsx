import { forwardRef } from "react";

type InputProps = {
  inputid: string;
  label: string;
  type: string;
  placeholder?: string;
  inputicon: JSX.Element;
  onChangeHandler: React.ChangeEventHandler;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputid: inputId, label, type, placeholder, inputicon: inputIcon, onChangeHandler } =
    props;

  return (
    <>
      <label
        className='mb-1 self-start text-sm font-medium leading-7 text-gray-700'
        htmlFor={inputId}>
        {label}
      </label>
      <div className='relative flex w-full items-center text-gray-400'>
        <input
          ref={ref}
          {...props}
          className='w-full rounded-2xl border border-slate-300 bg-gray-100 bg-opacity-50 px-3 py-2 pr-8
          text-sm placeholder-slate-400 shadow-sm invalid:border-rose-500 invalid:text-rose-600
          focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1
          focus:ring-sky-500 focus:invalid:border-rose-500 focus:invalid:ring-rose-500'
          id={inputId}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        {inputIcon}
      </div>
    </>
  );
});

export default Input;
