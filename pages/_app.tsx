import { AppLayout } from "@/components/Layouts/AppLayout";
import { persistor, store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/editor.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
           <PersistGate persistor={persistor}>
    <AppLayout>
       
     <Component {...pageProps} />
  
    </AppLayout>
    </PersistGate>
    </Provider>
  );
}
