import {SquareArrowOutUpRight} from 'lucide-react';

import {IMAGE_AVATAR_IMG, IMAGE_CIRCLE_SHAPE} from '@/constant/images';

import SubLabel from '@/components/base/labels/SubLabel';
import HeadLabel from '@/components/base/labels/HeadLabel';
import BaseImage from '@/components/base/images/BaseImage';
import BaseButton from '@/components/base/buttons/BaseButton';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';

const Hero = () => {
  return (
    <div className="relative p-12 sm:p-16 text-center flex flex-col space-y-4 items-center">
      <div className="flex items-center flex-col sm:flex-row space-x-3 space-y-3 mb-8">
        <BaseAvatar src={IMAGE_AVATAR_IMG} alt="CN" fallback="CA" className="w-12 h-12" />
        <span className="outline-1 outline-solid px-4 py-1 rounded-full">
          Hola! I'm <span className="italic text-base-color">Charli</span> -{' '}
          <span className="italic text-base-color">Frontend Developer</span>
        </span>
      </div>

      <HeadLabel className="mb-4">Made with love.</HeadLabel>
      <SubLabel className="mb-16">
        Shaping the way users engage with the web through intuitive design and seamless functionality.
      </SubLabel>

      <BaseButton
        endIcon={<SquareArrowOutUpRight className="text-base-color" />}
        variant="outline"
        className="!p-7 rounded-full"
      >
        See my work
      </BaseButton>

      <BaseImage src={IMAGE_CIRCLE_SHAPE} className="hidden sm:block absolute bottom-50 left-10 w-[100px] h-[100px]" />
      <BaseImage src={IMAGE_CIRCLE_SHAPE} className="hidden sm:block  absolute top-30 right-20 w-[120px] h-[120px]" />
      <BaseImage src={IMAGE_CIRCLE_SHAPE} className="hidden sm:block  absolute bottom-10 right-30 w-[80px] h-[80px]" />
    </div>
  );
};

export default Hero;
