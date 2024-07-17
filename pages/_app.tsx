import { AppLayout } from "@/components/Layouts/AppLayout";
import { persistor, store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/editor.css";


export default function App({ Component, pageProps, router }: AppProps) {
  const pathName = router.pathname.slice(1);
  const publicPaths = [
    "login",
    "signup"
     ];
     const privatePaths = {
     "home": "Home",
     "create-note": "Create Note",
     };
     const isPublicRoute = publicPaths.includes(pathName);
     const customTitle =
      isPublicRoute ? publicPaths.find(item => item === pathName ) : privatePaths[pathName.split("dashboard/")[1] as keyof typeof privatePaths];
  return (
    <Provider store={store}>
           <PersistGate persistor={persistor}>
    <AppLayout title={`${customTitle}`}>
       
     <Component {...pageProps} />
  
    </AppLayout>
    </PersistGate>
    </Provider>
  );
}
