import HeadLabel from '@/components/base/labels/HeadLabel';
import BaseButton from '@/components/base/buttons/BaseButton';
import {SquareArrowOutUpRight} from 'lucide-react';

const Projects = () => {
  return (
    <div className="bg-green-300 py-12 flex flex-col space-y-3 p-4 items-start">
      <HeadLabel>Projects.</HeadLabel>
      <div className="bg-red-300 p-12">image</div>

      <div className="flex flex-row space-x-3">
        <div className="bg-red-300 p-3 rounded-sm text-sm">tech stack</div>
        <div className="bg-red-300 p-3 rounded-sm text-sm">tech stack</div>
        <div className="bg-red-300 p-3 rounded-sm text-sm">tech stack</div>
      </div>

      <BaseButton endIcon={<SquareArrowOutUpRight />} variant="outline" className="!p-7 rounded-full">
        View
      </BaseButton>
    </div>
  );
};

export default Projects;
