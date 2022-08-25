import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Dashboard from "../Dashboard";
import DateSelector from "../DateSelector";
import Loading from "../Loading";
import {  useNavigate } from 'react-router-dom';

class DashboardPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataChoice: "Total",
      activeData: [],
      activeEmployees: ["TWRA Intern (BH05115)", "Tom Wochna (BH01558)", "Zack Dover (BH05212)", "Jay Ghussein (BH05196)"],
      tickets: [],
      date: new Date(),
      filterDate: "",
      employeeList: [],
      mounted: false,
      loggedIn: props.loggedIn,
      user: props.user,
    }
  }

  componentDidMount() {
    const e = []
    var data = []
    let isMounted = true
    fetch("http://127.0.0.1:90/members", { method: 'GET' }).then(
      res => res.json()
    ).then(
      data => {
        this.setState({ data: data })

      }
    )
    this.state.activeEmployees.map(activeEmp => {
      this.state.data.map(allEmp => {
        if (allEmp.name == activeEmp) {
          e.push(allEmp)
        }
      })
    })
    this.setState({ activeData: e })
    let ticketList = []

    this.state.data.map(employee => {

      employee.tickets.map(ticket => {
        ticketList.push(ticket)

        var date = new Date(ticket.timeCreated)
        ticket.timeCreated = date;


      })



    })

    this.setState({ tickets: ticketList })


    let filter = ticketList.filter(ticket => ticket.timeCreated < this.state.date && ticket.timeCreated > this.state.filterDate)
    console.log(this.state)

  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  setFromDate = (date) => {
    this.setState({ filterDate: date })

  }

  setToDate = (date) => {
    this.setState({ date: date })
  }

  changeData = (e) => {
    this.setState({ dataChoice: e })

  }

  navigate = (path) =>{
    let navigate = useNavigate()
    navigate(path)
  }



  render() {

    return (
     
      <div>
        {this.state.loggedIn === false ?
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", textAlign: "center", padding: "25%" }}>
              <p>Login to view data</p>
              <Button variant="contained" onClick={()=>this.navigate("/") }>Login</Button>
            </div>
          :

          <div className="App">


        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => this.changeData("Total")} >Total Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Access")}  >Access Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Help")} >Help / Assistance Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Fail")}  >Failure Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Incidents")}  >View Incidents</Button>
          <DateSelector filterDate={this.setFromDate} label={"From"} />
          <p3> ____</p3>
          <DateSelector filterDate={this.setToDate} label={"To"} />
          
        </Stack>
        <div className="App2">
          {this.state.data.length === 0 ? <Loading />
            : <Dashboard mounted={this.state.mounted} data={this.state.data} dataChoice={this.state.dataChoice} filterDate={this.state.filterDate} date={this.state.date} user={this.state.user} />}
        </div>
      </div>
        
      }
      </div>
   

    );

  }
}



export default DashboardPage;