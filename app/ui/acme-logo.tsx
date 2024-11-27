import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { mFont } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${mFont.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[38px]">CO₂</p>
      <RocketLaunchIcon className="h- w-10 rotate-[43deg]" />
    </div>
  );
}
