import { Link } from 'react-router-dom';
import { FullscreenLayouts } from '../components/layouts';

export const FourOhFour = () => {
  return (
    <FullscreenLayouts>
      <div className="bg-pink-400 w-screen h-screen flex items-center justify-center">
        <div className=" text-white text-center">
          <span className="text-7xl animate-pulse block">404</span>

          <Link to="/" title="Home" className="font-bold">
            Go back home
          </Link>
        </div>
      </div>
    </FullscreenLayouts>
  );
};
