import Highcharts from 'highcharts';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import HighchartsReact from 'highcharts-react-official';
import { Stack, Box } from '@mui/material';
import Typography from '../../Atoms/Typography/Typography';
import './Styles.css';
import ChartTabs from '../ChartTabs/ChartTabs';
interface GraphValues {
  id: number
  coinName: string,
  coinValues: number[]
}

const Charts = (props: any) => {

  const graphData = [
    {
      "id": 1,
      "coinName": "BITCOIN",
      "coinValues": [
        10, 20, 30, 40, 5, 35
      ]
    },
    {
      "id": 2,
      "coinName": "ETHEREUM",
      "coinValues": [
        30, 10, 15, 20, 5, 45
      ]
    },
    {
      "id": 3,
      "coinName": "ETHEREUM 2",
      "coinValues": [
        3, 10, 25, 20, 33, 55
      ]
    },
    {
      "id": 4,
      "coinName": "TETHER",
      "coinValues": [
        30, 10, 47, 40, 55, 45
      ]
    },
    {
      "id": 5,
      "coinName": "DOGECOIN",
      "coinValues": [
        25, 37, 42, 48, 57, 63
      ]
    },
    {
      "id": 6,
      "coinName": "XRP",
      "coinValues": [
        15, 44, 23, 28, 55, 60
      ]
    },
    {
      "id": 7,
      "coinName": "POLKADOT",
      "coinValues": [
        30, 10, 15, 20, 5, 45
      ]
    }

  ]
  const setGraphData = () => {
    console.log('IN set graph data');
    console.log(graphData);
    let selectedCoinValues = graphData.filter((coin: GraphValues) => coin.coinName === props.selectedCoinName)[0]

    const options = {
      chart: {
        type: 'areaspline'
      },      
      title:{
        text:''
      },
      legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        float:true,       
        x:3,
        y:70,
        border:'none'
      },
      plotOptions: {
        series: {
            fillOpacity: 0.1
        }
    },
      series: [ {
        name: 'Total Investment',
        data: [10, 20, 10, 50, 40, 60],
        color:'#0052FF'
      },{
        name: selectedCoinValues.coinName,
        data: selectedCoinValues.coinValues,
        color: '#FFA74F',
        
      },]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} data-testid="chart" />
  )
  };

  return (
    <div>
      <Stack direction='row' width='840px' padding='20px' justifyContent='space-between' alignItems='center'>
        <Typography variant='subtitle1' content='My portfolio value' />
        <div>
          <DonutLargeIcon sx={{paddingRight:'5px'}} />
          <img src='/assets/Vector.jpg' alt='graph' width={'25px'} height={'25px'} />
        </div>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-around' >
        <Box borderRight={'1px solid #E8E8F7'} padding='10px' alignItems='center'>
          <Typography variant='caption1' content='Total Investment' />
          <Typography variant='h6' content='$ 11,900,204' />
        </Box>
        <Box alignItems='center' padding='10px'>
          <Typography variant='caption1' content='Bitcoin' />
          <Typography variant='h6' content='$ 34,000' />
        </Box>
        <ChartTabs/>
       
              </Stack>
      <Box border='1px solid #E8E8F7' width='840px' height='423px'>
        {setGraphData()}
      </Box>
    </div>

  )
};
export default Charts;