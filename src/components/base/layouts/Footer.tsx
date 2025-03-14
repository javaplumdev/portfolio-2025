import BaseIcon from '../icons/BaseIcon';

const Footer = () => {
  return (
    <footer className="bg-red-300 p-4 flex flex-col space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col sm:justify-between">
          <div className="mb-3 text-lg font-bold text-base-color">charli.</div>
          <div className="flex space-x-3">
            <BaseIcon iconName="TbBrandFacebook" />
            <BaseIcon iconName="TbBrandInstagram" />
            <BaseIcon iconName="TbBrandLinkedin" />
          </div>
        </div>

        <div>
          <div className="mb-3">Footer links</div>
          <div>
            <ul className="flex flex-col space-y-2">
              <li>About</li>
              <li>Experiences</li>
              <li>Projects</li>
              <li>Designs</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between text-sm my-12 space-y-3">
        <div>System operational</div>

        <div>
          Icons by{' '}
          <a href="https://icons8.com/" target="_blank" className="underline">
            Icons8
          </a>
        </div>

        <div>© 2025 all rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
