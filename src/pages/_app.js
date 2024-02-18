import "@/styles/globals.css";

const App = ({ Component, pageProps, router }) => {
  return (
    <div className="roboto-400">
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
