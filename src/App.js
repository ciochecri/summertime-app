import { Box, Button, Card, CardContent, Typography,} from '@mui/material';
import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { FileDownload, Send } from "@mui/icons-material";

import Papa from 'papaparse';
import './App.css';

function App() {
  const [cardData, setCardData] = useState([]);

  const MAX_NUM = 53;
  const OFFSET = Math.max(0, Math.round((new Date("06/06/2024").getTime() - new Date().getTime())/ (1000 * 3600 * 24)));


  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      var res = await (
        await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8lYl1nsSky2wAyXJPdIzWyxrLqKYX8GAAPNdavVFDv-VHhzi9hQcgp8n85aUp5UCak91xEnh_NGGL/pub?gid=574938590&single=true&output=csv'
        )
      ).blob().then(b => b.text());

      var results = Papa.parse(res, {header: true});

      if(results?.data[0]){
        const data = [results.data[0]['S1'],
         results.data[0]['S2'],
         results.data[0]['S3'],
         results.data[0]['S4'],
         results.data[0]['S5'],
         results.data[0]['S6'],
         results.data[0]['S7']];        
        setCardData(data);
      }
    };

    dataFetch();
  }, []);


  function getColor(numberRemaining){
    if(numberRemaining === 0)
      return '#282c34';
    if(numberRemaining < 10)
      return '#eb9694';
    if(numberRemaining < 20)
      return '#fef3bd'; 
    return '#c1e1c5'; 
  }

  function getTextColor(numberRemaining){
    if(numberRemaining === 0)
      return '#ffffff';
    return undefined; 
  }

  function getSettimanaDescription(index){
    if(index === 1)
      return '10 giugno\n14 giugno';
    if(index === 2)
      return '17 giugno\n21 giugno';
    if(index === 3)
      return '24 giugno\n28 giugno';
    if(index === 4)
      return '1 luglio\n5 luglio';
    if(index === 5)
      return '8 luglio\n12 luglio';
    if(index === 6)
      return '15 luglio\n19 luglio';
    if(index === 7)
      return '22 luglio\n26 luglio';
    return '';
  }


  return (
    <div className="App">
      <Box style={styles.logoContainer}>
        <img src="https://i.ibb.co/tLnpPf4/Whats-App-Image-2024-05-09-at-07-36-26.jpg" alt="Logo" style={{width: 200}}/>
      </Box>
      <Box style={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Card style={{...styles.card, backgroundColor: getColor(MAX_NUM - card - OFFSET), color: getTextColor(MAX_NUM - card - OFFSET)}} variant="outlined" key={index}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Settimana {index + 1}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{whiteSpace: 'pre-line', color: getTextColor(MAX_NUM - card - OFFSET)}}>
                {getSettimanaDescription(index + 1)}
              </Typography>
              <Typography variant="body1">
                Posti rimanenti <br/> <span style={{fontWeight: 'bold'}}>{MAX_NUM - card - OFFSET}</span> / {MAX_NUM}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box style={styles.allLinksContainer}>
        <Box style={styles.buttonsContainer}>
          <Typography variant='text.secondary' gutterBottom>
            Moduli
          </Typography>
          <Box>
            <Button endIcon={<Send />} style={{marginTop: 20, width: 300}} href="https://forms.gle/ndP4Va1oVTPeH2RV8" variant="contained" disabled = {false}>MODULO DI ISCRIZIONE</Button>
          </Box>
          <Box>
            <Button endIcon={<Send />} style={{marginTop: 20, width: 300}} href="https://forms.gle/tTJQkkdt2qyV5A9M7" variant="contained" disabled = {true}>MODULO DI AGGIUNTA SETTIMANE (solo per utenti già iscritti)</Button>
          </Box>
        </Box>
        <Box style={styles.downloadsContainer}>
          <Typography variant='text.secondary' gutterBottom>
            Download
          </Typography>
          <Box>
            <Button startIcon={<FileDownload />} style={{marginTop: 15, width: 300}} href="https://drive.google.com/uc?export=download&id=1v7JEveQcf-W8LTx3tXYkxWVxtqTjglhy" variant="outlined" disabled = {false}>REGOLAMENTO</Button>
          </Box>
          <Box>
            <Button startIcon={<FileDownload />} style={{marginTop: 15, width: 300}} href="https://drive.google.com/uc?export=download&id=1nERc8FY_7qiNvuvEMFJomLMZeXkvgPLP" variant="outlined" disabled = {false}>VOLANTINO</Button>
          </Box>
          <Box>
            <Button startIcon={<FileDownload />} style={{marginTop: 15, width: 300}} href="https://drive.google.com/uc?export=download&id=14c9a7CCPMZE4KCXY9bNWJyEKdi_dq8IV" variant="outlined" disabled = {false}>PRESENTAZIONE</Button>
          </Box>
        </Box>
      </Box>
      
    </div>
  );
}

//backgroundColor: getColor(MAX_NUM - card)

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 20
  },
  logo: {
    fontFamily: 'Fontdiner Swanky',
    fontSize : 50
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 150,
    margin: 10,
    border: "1px solid white"
  },
  allLinksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    width: 350,
    margin: 20,
    border: "1px solid black",
    padding: 10,
    height: 200
  },
  downloadsContainer: {
    width: 350,
    margin: 20,
    border: "1px solid black",
    padding: 10,
    height: 200
  },
});

export default App;
