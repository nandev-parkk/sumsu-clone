import Footer from "components/common/footer/Footer";
import Header from "components/common/header/Header";
import Main from "pages/main/Main";
import "styles/global.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
