import "../styles/globals.css";
import { HeaderProvider, MainProvider } from "../contexts";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <HeaderProvider>
        <MainProvider>
        <Component {...pageProps} />
        </MainProvider>
      </HeaderProvider>
    </Provider>
  );
}

export default MyApp;
