import { getList } from "../../API/mockServices";
import { getApiList } from "../../API/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Hello from "../../Components/Hello/hello";
import Info from "../../Components/Infos/infos";
import Activity from "../../Components/Activity/activity";
import Duration from "../../Components/Duration/duration";
import RadarComponent from "../../Components/Radar/radar";
import Score from "../../Components/Score/score";

function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {

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
    <div className="container">
      <div className="loading">
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
      </div>
    </div>
  );
}
export default Dashboard;
