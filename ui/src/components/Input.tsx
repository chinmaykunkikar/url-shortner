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
  const {
    inputid: inputId,
    label,
    type,
    placeholder,
    inputicon: inputIcon,
    onChangeHandler,
  } = props;

  return (
    <>
      <label
        className='mb-1 self-start text-sm font-medium leading-7 text-neutral-200'
        htmlFor={inputId}>
        {label}
      </label>
      <div className='relative flex w-full items-center'>
        <input
          ref={ref}
          {...props}
          className='w-full rounded-2xl border border-neutral-300 bg-neutral-700 bg-opacity-50 py-3 pl-4
          pr-8 text-neutral-100 placeholder-neutral-600 caret-neutral-50 
          invalid:border-rose-500 focus:border-sky-500 focus:bg-neutral-900 focus:outline-none focus:ring-1
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
