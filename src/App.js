import Footer from "./components/Footer";
import TextManipulator from "./components/TextManipulator";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <TextManipulator />
      <Footer />
    </LanguageProvider>
  );
};

export default App;
