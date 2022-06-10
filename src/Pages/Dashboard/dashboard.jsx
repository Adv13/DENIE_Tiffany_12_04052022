//import { getList } from "../../API/mockServices";
import { getApiList } from "../../API/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hello from "../../Components/Hello/hello";
import Info from "../../Components/Infos/infos";
import Activity from "../../Components/Activity/activity";
import Duration from "../../Components/Duration/duration";
import RadarComponent from "../../Components/Radar/radar";
import Score from "../../Components/Score/score";
import Error from "../../Components/Error/error";

function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    /** Using Mocked datas*/

    // getList().then((items) => {
    //   let datas = items.find((item) => item.id === parseFloat(id));
    //   setData(datas);
    // });

    /**Using API datas*/
    getApiList(id).then((items) => {
      setData(items.data);
    });
  }, [id]);

  return data ? (
    <div className="wrapper">
      <section className="main">
        <Hello username={data.userInfos.firstName} />
        <div className="content">
          <div className="graphs">
            <Activity />
            <div className="graphs--bottom">
              <Duration />
              <RadarComponent />
              <Score />
            </div>
          </div>
          <Info
            cal={data.keyData.calorieCount}
            prot={data.keyData.proteinCount}
            glu={data.keyData.carbohydrateCount}
            lip={data.keyData.lipidCount}
          />
        </div>
      </section>
    </div>
  ) : ( 
    <div className="container d-flex justify-content-center ms-5 ps-5">
      <Error />
    </div>
  );
}
export default Dashboard;
