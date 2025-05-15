import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import QuantoCostiamo from "../../content/QuantoCostiamo.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DoveAndiamo from "../../content/DoveAndiamo.json";
import MiddleBlock from "../../components/MiddleBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const ReviewBlock = lazy(() => import("../../components/ReviewBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      {/*<MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      />*/}
      <ContentBlock
        direction="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="placeholder.svg"
        id="intro"
        cards={true}
      />
      <ContentBlock
        direction="left"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        icon="a-chi-e-rivolto.png"
        id="achierivolto"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="cosa-facciamo.png"
        id="attivita"
      />
      <ContentBlock
        direction="left"
        title={DoveAndiamo.title}
        content={DoveAndiamo.text}
        icon="dove-andiamo.png"
        id="attivita2"
      />
      <ContentBlock
        direction="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="cosa-mangiamo.png"
        id="menu"
      />
      
      <ContentBlock
        direction="right"
        title={QuantoCostiamo.title}
        content={QuantoCostiamo.text}
        section={QuantoCostiamo.section}
        notes={QuantoCostiamo.notes}
        icon="placeholder.svg"
        id="prezzi"
        priceCalculator={true}
      />
      <ReviewBlock/>
      {/*<Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />*/}
    </Container>
  );
};

export default Home;
