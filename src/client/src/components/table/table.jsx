

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const List = () => {
    const rows = [
      {
        BlockNumber: 1143155,
        Researcher: "Dr.Kate",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        Project: "HashLink",
        date: "1 March",
        votedVerified: 785,
        Project_description: "..........",
        status: "Approved",
      },
      {
        BlockNumber: 2235235,
        Researcher: "Dr.Trude",
        img: "https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg",
        Project: "RiddleChain",
        date: "1 March",
        votedVerified: 900,
        Project_description: "..........",
        status: "Pending",
      },
      {
        BlockNumber: 2342353,
        Researcher: "Dr.Zemi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i8DMEVGgOMroNG_ef48R1Y42JHvsu_GFUw&usqp=CAU",
        Project: "Colchain",
        date: "1 March",
        votedVerified: 35,
        Project_description: "..........",
        status: "Pending",
      },
      {
        BlockNumber: 2357741,
        Researcher: "Dr.Rasel",
        img: "https://pbs.twimg.com/media/D8XfdElXUAATutj.jpg",
        Project: "Stansis",
        date: "1 March",
        votedVerified: 920,
        Project_description: "..........",
        status: "Approved",
      },
      {
        BlockNumber: 2342355,
        Researcher: "Dr.Sham",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8--AZcK-MgNwCdBS0raLZrNOKXyME_WMTA&usqp=CAU",
        Project: "BanKer",
        date: "1 March",
        votedVerified: 2000,
        Project_description: "..........",
        status: "Pending",
      },
    ];
    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWBlockNumberth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking BlockNumber</TableCell>
              <TableCell className="tableCell">Researcher</TableCell>
              <TableCell className="tableCell">Project</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">votedVerified</TableCell>
              <TableCell className="tableCell"> Project_description</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.BlockNumber}>
                <TableCell className="tableCell">{row.BlockNumber}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.Researcher}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.Project}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.votedVerified}</TableCell>
                <TableCell className="tableCell">{row.Project_description}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default List;

  