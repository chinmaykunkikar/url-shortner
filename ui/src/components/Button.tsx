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
      className='inline-flex items-center rounded-lg bg-gradient-to-r from-green-400
      to-blue-500 py-3 px-5 text-center font-bold text-white
    hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-sky-300
      disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-gray-500'>
      {btnText} {btnIcon}
    </button>
  );
}
