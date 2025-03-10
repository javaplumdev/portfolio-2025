import Navbar from './Navbar';
import Footer from './Footer';

type BaseLayoutProps = {
  children: Children;
};

const BaseLayout = (props: BaseLayoutProps) => {
  const {children} = props;

  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">{children}</div>

      <Footer />
    </section>
  );
};

export default BaseLayout;
