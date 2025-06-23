import Footer from "./components/Footer";
import MainBrandLogo from "./components/MainBrandLogo";
import TextManipulator from "./components/TextManipulator";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <TextManipulator />
      <Footer />
    </LanguageProvider>
  );
};

export default App;
