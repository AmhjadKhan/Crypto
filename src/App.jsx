import FAQ from "./component/Faq/Faq";
import Footer from "./component/footer/Footer";
import Header from "./component/Header/Header";
import Holders from "./component/Holders/Holders";
import Mission from "./component/misson/Misson";
import Navber from "./component/Navber/Navber";
import Rewards from "./component/Reward/Rewards";
import Workes from "./component/Works/Workes";

function App() {
  return (
    <>
      <Navber />
      <Header />
      <Rewards />
      <Holders />
      <Workes />
      <Mission />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
