import "@/styles/globals.css";

const App = ({ Component, pageProps, router }) => {
  return (
    <div className="manrope overflow-hidden">
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
