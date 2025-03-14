import {map} from 'lodash';

import {DATA_STATS} from '@/constant/data';
import BaseIcon from '@/components/base/icons/BaseIcon';

const STATS_LABEL: Record<string, string> = {
  projects_made: 'Projects made',
  lines_of_code: 'Lines of codes',
  designs: 'Designs',
};

const STATS_ICONS: Record<string, React.ReactNode> = {
  projects_made: <BaseIcon iconName="TbFile" color="white" />,
  lines_of_code: <BaseIcon iconName="TbCode" color="white" />,
  designs: <BaseIcon iconName="TbBrandFigma" color="white" />,
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 p-8 gap-6 bg-base-color text-white rounded-xl mx-4 xl:mx-0 my-16">
      {map(DATA_STATS, (value, key) => {
        const {count} = value || {};

        return (
          <div key={key} className="flex items-center flex-col">
            <div className="flex items-center space-x-3">
              {STATS_ICONS[key]}
              <h3 className="text-6xl mb-2">{count} +</h3>
            </div>
            <p className="text-xl">{STATS_LABEL[key]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
