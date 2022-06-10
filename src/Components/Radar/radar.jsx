//import { getRadar } from "../../API/mockServices";
import { getApiRadar } from "../../API/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

/**
* This function returns the radar chart of the type of activity of the profile concerned,
* if the porfile exists in the database.
*/
function RadarComponent() {
  const [radarData, setRadarData] = useState([]);
  const { id } = useParams();


  /**
  * This hook allows the trigger of a function in a asynchronous way,
  * if there is any change in the state of the component.
  */
  useEffect(() => {

   /**
   * This function takes the information under "kind" category in the dataset,
   * in order to create the radar chart with the kind informations and its values.
   */
    getApiRadar(id).then((items) => {
      if (items.data) {
        const formattedData = items.data.data.map((rd) => ({
          subject: items.data.kind[rd.kind],
          A: rd.value,
        }));
        setRadarData(formattedData);
      }
    });
  }, [id]);

  return radarData.length > 0 ? (
    <div className="radar">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart
          data={radarData}
          margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            tickLine={false}
            fontSize={14}
          />
          <PolarRadiusAxis
            angle={30}
            type="number"
            tick={false}
            axisLine={false}
            tickCount="6"
            line="0"
          />
          <Radar dataKey="A" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : null;
}

export default RadarComponent;
