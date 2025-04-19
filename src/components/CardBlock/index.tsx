import { Row, Col } from "antd";
import { useEffect, useState } from 'react';
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { CardBlockSection, Content } from "./styles";
import Papa from 'papaparse';

interface CardBlockProps {
  t: TFunction;
}

const MAX_NUM = 53;
const OFFSET = Math.max(0, Math.round((new Date("03/20/2025").getTime() - new Date().getTime())/ (1000 * 3600 * 24)));

function getColor(numberRemaining: number){
  if(numberRemaining === 0)
    return '#282c34';
  if(numberRemaining < 10)
    return '#eb9694';
  if(numberRemaining < 20)
    return '#fef3bd'; 
  return '#c1e1c5'; 
}

function getTextColor(numberRemaining : number){
  if(numberRemaining === 0)
    return '#ffffff';
  return undefined; 
}

function getSettimanaDescription(index : number){
  if(index === 1)
    return '9 giugno\n13 giugno';
  if(index === 2)
    return '16 giugno\n20 giugno';
  if(index === 3)
    return '23 giugno\n27 giugno';
  if(index === 4)
    return '30 giugno\n4 luglio';
  if(index === 5)
    return '7 luglio\n11 luglio';
  if(index === 6)
    return '14 luglio\n18 luglio';
  if(index === 7)
    return '21 luglio\n25 luglio';
  return '';
}

const CardBlock = ({ t }: CardBlockProps) => {
  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      var res = await (
        await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8lYl1nsSky2wAyXJPdIzWyxrLqKYX8GAAPNdavVFDv-VHhzi9hQcgp8n85aUp5UCak91xEnh_NGGL/pub?gid=574938590&single=true&output=csv'
        )
      ).blob().then(b => b.text());

      type WeekDashboard = {
        S1: number;
        S2: number;
        S3: number;
        S4: number;
        S5: number;
        S6: number;
        S7: number;
      };

      const results = Papa.parse<WeekDashboard>(res, {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      });

      if(results?.data[0]){
        /*const data = [results.data[0]['S1'],
         results.data[0]['S2'],
         results.data[0]['S3'],
         results.data[0]['S4'],
         results.data[0]['S5'],
         results.data[0]['S6'],
         results.data[0]['S7']];*/
         const data = [0, 0, 0, 0, 0, 0, 0]
        setCardData(data);
      }
    };

    dataFetch();
  }, []);

  return (
    <CardBlockSection>
      {cardData.map((card, index) => (
        <Content style={{backgroundColor: getColor(MAX_NUM - card - OFFSET), color: getTextColor(MAX_NUM - card - OFFSET)}}>
          <h6 style={{fontSize: '15px'}}>Settimana {index + 1}</h6>
          <div style={{whiteSpace: 'pre-line', color: getTextColor(MAX_NUM - card - OFFSET)}}>
            {getSettimanaDescription(index + 1)}
          </div>
          <div>
            Posti rimanenti <br/> <span style={{fontWeight: 'bold'}}>{MAX_NUM - card - OFFSET}</span> / {MAX_NUM}
          </div>
        </Content>
      ))}
    </CardBlockSection>
  );
};

export default withTranslation()(CardBlock);
