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
    <div className='m-5 flex rounded p-5 outline outline-1 outline-gray-500'>
      <a
        className='text-xl text-pink-500 decoration-sky-500/60 decoration-2 hover:underline'
        href={FULL_URL}>
        {FULL_URL}
      </a>
      <ClipboardDocumentIcon
        className='ml-2 h-6 w-6 cursor-pointer stroke-gray-400 hover:stroke-sky-400'
        title='Copy to clipboard'
        onClick={copyToClipboard}
      />
    </div>
  );
}
