import { useDispatch, useSelector } from 'react-redux';

import { Layout } from '../layouts';

export const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(({ counter }) => {
    return counter;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4"></div>
    </Layout>
  );
};
