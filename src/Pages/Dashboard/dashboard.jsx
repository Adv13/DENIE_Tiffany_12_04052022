import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import { getActivity, getDuration, getList, getRadar } from '../../API/mockServices';
import { getApiActivity, getApiDuration, getApiList, getApiRadar } from '../../API/services';

// Sample chart data
const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];



function Dashboard(){
    console.log('Données de  GET API LIST:', getApiList);
    console.log('Données de  GET API ACTIVITY:', getApiActivity);
    console.log('Données de  GET API DURATION:', getApiDuration);
    console.log('Données de  GET API RADAR:', getApiRadar);
    console.log('Données de  GETLIST:', getList);
    console.log('Données de  GETACTIVITY:', getActivity);
    console.log('Données de  GETDURATION:', getDuration);
    console.log('Données de  GETRADAR:', getRadar);

    return(<section>
        <h1>Bonjour <strong>Thomas</strong></h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        <>
            <h1 className="text-heading">
                Line Chart Using Rechart
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
        </section>)
}

export default Dashboard;