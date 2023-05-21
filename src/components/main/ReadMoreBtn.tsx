import { InfoIcon } from '@/components/icons';
import './ReadMoreBtn.style.css';

export const ReadMoreBtn = () => (
  <button
    className="readMoreShadow rounded-xl border-2 border-white-50
    bg-aqua px-6 py-1 text-black
    "
  >
    <div
      className="flex w-full content-evenly
        justify-evenly "
    >
      <span className="ml-4">
        <InfoIcon />
      </span>
      <span>קראו עלינו עוד...</span>
    </div>
  </button>
);
