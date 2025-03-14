import {get, map} from 'lodash';
import MarqueeComp from 'react-fast-marquee';

import {TECH_STACK_DATA} from '@/constant/data';

import BaseImage from '@/components/base/images/BaseImage';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';

const Marquee = () => {
  return (
    <div className="px-4 py-12 flex flex-col sm:flex-row items-center space-x-8">
      <p className="text-muted-foreground mb-16 sm:mb-0">
        Utilizing these technologies to support the creation of amazing ventures.
      </p>

      <MarqueeComp autoFill pauseOnHover className="py-3">
        {map(TECH_STACK_DATA, (value, key) => {
          const image = get(value, 'image');
          const label = get(value, 'label');

          return (
            <Tooltip key={key}>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                  <BaseImage src={image} className="mr-1 h-16  mr-8" />
                </div>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          );
        })}
      </MarqueeComp>
    </div>
  );
};

export default Marquee;
