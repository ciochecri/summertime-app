import { Row, Col, Avatar, Rate } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Review, ReviewName, ReviewText, ReviewBlockSection, ContentWrapper, Content} from "./styles";
import { UserOutlined } from '@ant-design/icons';

interface ReviewBlockProps {
  t: TFunction;
}

interface ReviewProps {
  name?: string;
  age?: string;
  src?: string;
  text?: string;
}

const ReviewItem = ({ name, age, src, text }: ReviewProps) => {
    return (
      <Review style={{ minWidth: 300, margin: 10}}>
        <Row>
          <Avatar size={48} icon={<UserOutlined />} />
          <Col style={{ marginLeft: 10}}>
            <ReviewName>{name}</ReviewName>
            <ReviewName>{age}</ReviewName>
          </Col>
          <Rate disabled defaultValue={5} style={{ marginLeft: "auto"}}/>
        </Row>
        <ReviewText>{text}</ReviewText>
      </Review>
    );
  };

const ReviewBlock = ({ t }: ReviewBlockProps) => {
  return (
    <ReviewBlockSection>
      <Slide direction="up" triggerOnce>
        <Col lg={24} md={24} sm={24} xs={24} id="dicono">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h6>COSA DITE DI NOI?</h6>
                <Content>Ogni anno alla fine del centro estivo chiediamo un feedback attraverso un Google Form anonimo e queste sono alcune delle risposte!</Content>
              </Col>
            </ContentWrapper>
          </Row>
          <Row justify="space-between" align="middle">
            <Col lg={12} md={11} sm={24} xs={24}>
              <ReviewItem text="Ci eravamo già trovati bene lo scorso anno, ma quest'anno siamo stati ancora più contenti. Abbiamo apprezzato molto le destinazioni delle gite e i laboratori. Il personale ci è parso accogliente e attento. Nostro figlio è rimasto incuriosito dalla pallamano e si è sempre divertito molto. Grazie."/>
              <ReviewItem text="Innanzitutto complimenti e grazie, un bellissimo programma che auspico di ritrovare confermato l'anno prossimo. Se mi dovessi sforzare per inserire un consiglio proporrei di inserire nel progetto le prime due settimane di setembre, famiglie spesso rientrate dai piani vacanze e magari con un ripasso dei programmi scolatici, anche di gruppo. Saluti"/>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ReviewItem text="Nessun consiglio, solo complimenti per aver fatto passare a mio figlio un’estate super divertente e in compagnia! Grazie, vi faremo come sempre una gran pubblicità, ci vediamo l’anno prossimo!"/>
              <ReviewItem text="Siamo stati davvero molto contenti di aver partecipato al campo estivo! Torneremo sicuramente il prossimo anno e lo consiglieremo ai nostri amici! Ringraziamo tutto lo staff per la professionalità e per tutte le belle esperienze vissute insieme! Se ci fosse la possibilità di poter usufruire del servizio anche a settembre sarebbe meraviglioso!!! Grazie ragazzi!!!"/>
            </Col>
          </Row>
        </Col>
      </Slide>
    </ReviewBlockSection>
  );
};

export default withTranslation()(ReviewBlock);
