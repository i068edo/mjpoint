import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import AppBar from './AppBar';
import ChaCard from './ChaCard';
import Dialog from './Dialog';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const root = ReactDOM.createRoot(document.getElementById('root'));


/* function ChaCard({ cha, kaze, rank, point }) {
  return (
    <table border="5" frame="box" cellpadding="5">

      <thead>
        <tr>
          <th>{cha}</th><th>{kaze}</th><th>{rank}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th colspan="3">{point}</th>
        </tr>
      </tbody>

    </table>
  )
} */


export default function PointShowFiled() {
  const playersItems = [
    { cha: '自家', kaze: '東', rank: '1位', point: 25000 },
    { cha: '下家', kaze: '南', rank: '2位', point: 25000 },
    { cha: '対面', kaze: '西', rank: '3位', point: 25000 },
    { cha: '上家', kaze: '北', rank: '4位', point: 25000 },
  ];

  const [jicha, setJicha] = useState(playersItems[0].cha);
  const [jichaKaze, setJichaKaze] = useState(playersItems[0].kaze);
  const [jichaRank, setJichaRank] = useState(playersItems[0].rank);
  const [jichaPoint, setJichaPoint] = useState(playersItems[0].point);

  const [shimocha, setShimochaJicha] = useState(playersItems[1].cha);
  const [shimochaKaze, setShimochaKaze] = useState(playersItems[1].kaze);
  const [shimochaRank, setShimochaRank] = useState(playersItems[1].rank);
  const [shimochaPoint, setShimochaPoint] = useState(playersItems[1].point);

  const [toimen, setToimen] = useState(playersItems[2].cha);
  const [toimenKaze, setToimenKaze] = useState(playersItems[2].kaze);
  const [toimenRank, setToimenRank] = useState(playersItems[2].rank);
  const [toimenPoint, setToimenPoint] = useState(playersItems[2].point);

  const [kamicha, setKamicha] = useState(playersItems[3].cha);
  const [kamichaKaze, setKamichaKaze] = useState(playersItems[3].kaze);
  const [kamichaRank, setKamichaRank] = useState(playersItems[3].rank);
  const [kamichaPoint, setKamichaPoint] = useState(playersItems[3].point);

  const [kyoutakukin, setKyoutakukin] = useState(0);

  const pointMovePlayerList = [
    {
      value: 'jicha',
      label: '自家',
    },
    {
      value: 'shimocha',
      label: '下家',
    },
    {
      value: 'toimen',
      label: '対面',
    },
    {
      value: 'kamicha',
      label: '上家',
    },
    {
      value: 'kyoutakukin',
      label: '供託金',
    },
  ];

  const [pointPasser, setPointPasser] = useState(pointMovePlayerList[0].value);
  const [pointReceiver, setPointReceiver] = useState(pointMovePlayerList[0].value);
  const [movingPoint, setMovingPoint] = useState(0);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


  function nextKyoku(jichaKaze, shimochaKaze, toimenKaze, kamichaKaze) {
    if (jichaKaze == '東') {
      setJichaKaze('北');
    } else if (jichaKaze == '北') {
      setJichaKaze('西');
    } else if (jichaKaze == '西') {
      setJichaKaze('南');
    } else if (jichaKaze == '南') {
      setJichaKaze('東');
    }

    if (shimochaKaze == '東') {
      setShimochaKaze('北');
    } else if (shimochaKaze == '北') {
      setShimochaKaze('西');
    } else if (shimochaKaze == '西') {
      setShimochaKaze('南');
    } else if (shimochaKaze == '南') {
      setShimochaKaze('東');
    }

    if (toimenKaze == '東') {
      setToimenKaze('北');
    } else if (toimenKaze == '北') {
      setToimenKaze('西');
    } else if (toimenKaze == '西') {
      setToimenKaze('南');
    } else if (toimenKaze == '南') {
      setToimenKaze('東');
    }

    if (kamichaKaze == '東') {
      setKamichaKaze('北');
    } else if (kamichaKaze == '北') {
      setKamichaKaze('西');
    } else if (kamichaKaze == '西') {
      setKamichaKaze('南');
    } else if (kamichaKaze == '南') {
      setKamichaKaze('東');
    }
  }

  function pointHandler() {
    if (pointPasser == pointReceiver) {
      //エラー処理
      handleClickOpen();
    } else if (movingPoint <= 0) {
      //エラー処理
      handleClickOpen();
    } else {
      pointPass();
      pointReceive();
    }
  }
  function pointPass() {
    if (pointPasser == 'jicha') {
      setJichaPoint(jichaPoint - movingPoint);
    } else if (pointPasser == 'shimocha') {
      setShimochaPoint(shimochaPoint - movingPoint);
    } else if (pointPasser == 'toimen') {
      setToimenPoint(toimenPoint - movingPoint);
    } else if (pointPasser == 'kamicha') {
      setKamichaPoint(kamichaPoint - movingPoint);
    } else if (pointPasser == 'kyoutakukin') {
      setKyoutakukin(kyoutakukin - movingPoint);
    }
  }

  function pointReceive() {
    if (pointReceiver == 'jicha') {
      setJichaPoint(movingPoint - 0 + jichaPoint);
    } else if (pointReceiver == 'shimocha') {
      setShimochaPoint(movingPoint - 0 + shimochaPoint);
    } else if (pointReceiver == 'toimen') {
      setToimenPoint(movingPoint - 0 + toimenPoint);
    } else if (pointReceiver == 'kamicha') {
      setKamichaPoint(movingPoint - 0 + kamichaPoint);
    } else if (pointReceiver == 'kyoutakukin') {
      setKyoutakukin(movingPoint - 0 + kyoutakukin);
    }
  }

  function rankHandler() {
    const array = [jichaPoint, shimochaPoint, toimenPoint, kamichaPoint];
    const sortedArray = array.sort((x, y) => y - x);
    console.log(sortedArray);
    if (jichaPoint == sortedArray[0]) {
      setJichaRank('1位');
    } else if (jichaPoint == sortedArray[1]) {
      setJichaRank('2位');
    } else if (jichaPoint == sortedArray[2]) {
      setJichaRank('3位');
    } else if (jichaPoint == sortedArray[3]) {
      setJichaRank('4位');
    }
    if (shimochaPoint == sortedArray[0]) {
      setShimochaRank('1位');
    } else if (shimochaPoint == sortedArray[1]) {
      setShimochaRank('2位');
    } else if (shimochaPoint == sortedArray[2]) {
      setShimochaRank('3位');
    } else if (shimochaPoint == sortedArray[3]) {
      setShimochaRank('4位');
    }
    if (toimenPoint == sortedArray[0]) {
      setToimenRank('1位');
    } else if (toimenPoint == sortedArray[1]) {
      setToimenRank('2位');
    } else if (toimenPoint == sortedArray[2]) {
      setToimenRank('3位');
    } else if (toimenPoint == sortedArray[3]) {
      setToimenRank('4位');
    }
    if (kamichaPoint == sortedArray[0]) {
      setKamichaRank('1位');
    } else if (kamichaPoint == sortedArray[1]) {
      setKamichaRank('2位');
    } else if (kamichaPoint == sortedArray[2]) {
      setKamichaRank('3位');
    } else if (kamichaPoint == sortedArray[3]) {
      setKamichaRank('4位');
    }
  }

  return (
    <div>
      <div>
        <Box sx={{ ml: 1 }}>
          <Button variant="text" onClick={() => nextKyoku(jichaKaze, shimochaKaze, toimenKaze, kamichaKaze)} >次の局へ</Button>
        </Box>

        <Box sx={{  ml: 1, maxWidth: 530 }}>
          <Grid container >
            <Grid item xs={12} md={6}>
              <ChaCard cha={jicha} kaze={jichaKaze} rank={jichaRank} point={jichaPoint} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChaCard cha={kamicha} kaze={kamichaKaze} rank={kamichaRank} point={kamichaPoint} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChaCard cha={shimocha} kaze={shimochaKaze} rank={shimochaRank} point={shimochaPoint} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChaCard cha={toimen} kaze={toimenKaze} rank={toimenRank} point={toimenPoint} />
            </Grid>
            <Grid item xs={12} md={12} sx={{ml:1}}>
              供託金 {kyoutakukin}
            </Grid>
          </Grid>
        </Box>

        {/* <table>
          <tbody>
            <tr>
              <td><ChaCard cha={jicha} kaze={jichaKaze} rank={jichaRank} point={jichaPoint} /></td>
              <td><ChaCard cha={kamicha} kaze={kamichaKaze} rank={kamichaRank} point={kamichaPoint} /></td>
            </tr>
            <tr>
              <td><ChaCard cha={shimocha} kaze={shimochaKaze} rank={shimochaRank} point={shimochaPoint} /></td>
              <td><ChaCard cha={toimen} kaze={toimenKaze} rank={toimenRank} point={toimenPoint} /></td>
            </tr>
            <tr><td>供託</td><td>{kyoutakukin}</td></tr>
          </tbody>
        </table> */}
      </div>

      <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="passPlayer"
              select
              label="支払う"
              defaultValue="jicha"
              SelectProps={{
                native: true,
              }}
              helperText="点棒を支払うプレイヤーを選択して下さい。"
              onChange={(event) => setPointPasser(event.target.value)}
            >
              {pointMovePlayerList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="receivePlayer"
              select
              label="受け取る"
              defaultValue="jicha"
              SelectProps={{
                native: true,
              }}
              helperText="点棒を受け取るプレイヤーを選択して下さい。"
              onChange={(event) => setPointReceiver(event.target.value)}
            >
              {pointMovePlayerList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="movingPoint"
              label="支払い額"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => setMovingPoint(event.target.value)}
            />
            <br></br>
            <Button variant="contained" sx={{ ml: 1 }} onClick={pointHandler}>支払いを確定する</Button>
            <Button variant="contained" sx={{ ml: 1 }} onClick={rankHandler}>順位を更新する</Button>
          </div>
        </Box>
      </div>
      <Dialog open={open} setOpen={setOpen} /><br></br>

    </div>
  )
}

function AppBody() {
  return (
    <PointShowFiled />
  )
}

root.render(
  <React.StrictMode>
    <AppBar />
    <AppBody />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
