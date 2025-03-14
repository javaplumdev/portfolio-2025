import BaseButton from '@/components/base/buttons/BaseButton';
import HeadLabel from '@/components/base/labels/HeadLabel';
import SubLabel from '@/components/base/labels/SubLabel';
import {SquareArrowOutUpRight} from 'lucide-react';

const Designs = () => {
  return (
    <div className="bg-green-300 py-36 flex flex-col space-y-8 p-4">
      <div className="flex flex-col space-y-3">
        <HeadLabel>Designs.</HeadLabel>
        <SubLabel>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</SubLabel>
      </div>

      <div className="flex flex-row space-x-8">
        <div className="bg-red-300 p-12 w-[300px]">des</div>
        <div className="bg-red-300 p-12 w-[300px]">des</div>
        <div className="bg-red-300 p-12 w-[300px]">des</div>
        <div className="bg-red-300 p-12 w-[300px]">des</div>
      </div>

      <div className="flex flex-row space-x-8">
        <div className="bg-red-300 p-12 w-[400px]">des</div>
        <div className="bg-red-300 p-12 w-[400px]">des</div>
        <div className="bg-red-300 p-12 w-[400px]">des</div>
        <div className="bg-red-300 p-12 w-[300px]">des</div>
      </div>

      <div className="flex justify-center flex-row">
        <BaseButton endIcon={<SquareArrowOutUpRight />} variant="outline" className="!p-7 rounded-full">
          See all
        </BaseButton>
      </div>
    </div>
  );
};

export default Designs;
