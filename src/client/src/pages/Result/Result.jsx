import Table from "../../components/table/table";
import Pie from "../../components/pie/pie";
import Graph from "../../components/graph/graph";
//import StatBox from "../../components/Statbox";

const Result =()=>
{
    return(
        <div className="home">

           <div className="homeContainer"> 
            <div className="charts">
            <Pie />
            </div>
            <div >
                < Graph />
            </div>
            </div>
            <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
          </div>
          </div>
        
    );
}

export default Result;