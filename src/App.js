import Footer from "components/common/Footer/Footer";
import Header from "components/common/Header/Header";
import NavMenu from "components/common/NavMenu/NavMenu";
import Main from "pages/main/index";
import "styles/global.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NavMenu />
      <Footer />
    </div>
  );
}
