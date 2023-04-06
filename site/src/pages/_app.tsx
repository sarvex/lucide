import '../assets/styling.css';
import MainLayout from 'src/layouts/MainLayout';

const App = ({ Component, pageProps }) => {

  if (Component.getLayout === undefined) {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      {Component.getLayout(<Component {...pageProps} />)}
    </MainLayout>
  )
};

export default App;
