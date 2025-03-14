import React from 'react';
import HeadLabel from '@/components/base/labels/HeadLabel';
import SubLabel from '@/components/base/labels/SubLabel';

const About = () => {
  return (
    <React.Fragment>
      <div className="py-36 p-4">
        <HeadLabel>About.</HeadLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col space-y-4">
            <SubLabel>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </SubLabel>
          </div>
          <div className="bg-red-300">image</div>
        </div>
      </div>

      <div className="bg-green-300 p-4 py-36">
        <HeadLabel>Experiences.</HeadLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col space-y-4">
            <SubLabel>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</SubLabel>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="bg-red-300 p-12">image</div>
            <div className="bg-red-300 p-12">image</div>
            <div className="bg-red-300 p-12">image</div>
            <div className="bg-red-300 p-12">image</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
