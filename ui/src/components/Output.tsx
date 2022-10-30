import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

type OutputProps = {
  endpoint: string;
  shortId: string;
};

export default function Output(props: OutputProps) {
  const { endpoint, shortId } = props;

  const FULL_URL = `${endpoint}/${shortId}`;

  function copyToClipboard() {
    navigator.clipboard.writeText(FULL_URL);
  }

  return (
    <div className='my-10 flex rounded-xl p-6 outline outline-1 outline-neutral-200'>
      <a className='flex text-xl' href={FULL_URL}>
        <p className='text-neutral-200'>{`${endpoint}/`}</p>
        <p className='bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text font-bold text-transparent'>
          {shortId}
        </p>
      </a>

      <ClipboardDocumentIcon
        className='ml-4 h-6 w-6 cursor-pointer stroke-neutral-300 hover:stroke-sky-400'
        title='Copy to clipboard'
        onClick={copyToClipboard}
      />
    </div>
  );
}
