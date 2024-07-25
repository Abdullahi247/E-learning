import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
// import { wrapper } from "../redux/store";
// import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  const toastOpt = {
    success: {
      background: "white",
      style: {
        border: "1px solid #713200",
        color: "#713200",
        // fontSize: ".8rem",
      },
      iconTheme: {
        primary: "#Ff9933",
        secondary: "white",
      },
    },
    error: {
      style: {
        color: "#Ff4141",
        border: "1px solid #Ff4141",
        // fontSize: ".8rem",
      },
      iconTheme: {
        primary: "#Ff4141",
        secondary: "white",
      },
    },
  };
  return (
    <div>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{
          zIndex: "10000000",
        }}
        toastOptions={toastOpt}
      />
    </div>
  );
}
export default App
// export default wrapper.withRedux(App);
