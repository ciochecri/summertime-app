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
              <ReviewItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
              <ReviewItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ReviewItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
              <ReviewItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
            </Col>
          </Row>
        </Col>
      </Slide>
    </ReviewBlockSection>
  );
};

export default withTranslation()(ReviewBlock);
