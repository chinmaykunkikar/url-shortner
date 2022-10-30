type ButtonProps = {
  disabled: boolean;
  btntext: string;
  btnicon?: JSX.Element;
};

export default function Button(props: ButtonProps) {
  const { disabled, btntext: btnText, btnicon: btnIcon } = props;
  return (
    <button
      {...props}
      type='submit'
      disabled={disabled}
      className='inline-flex items-center rounded-lg bg-sky-500 py-2 px-3 text-center text-sm
          font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300
          disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-gray-500'>
      {btnText} {btnIcon}
    </button>
  );
}
