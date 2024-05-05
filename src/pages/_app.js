import "@/styles/globals.css";
import "@fontsource/roboto";

const App = ({ Component, pageProps, router }) => {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
