import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Dashboard from "./components/Dashboard";
import DateSelector from "./components/DateSelector";




export default class  extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataChoice: "Total",
      activeData: [],
      tickets: [],
      date: new Date(),
      filterDate: "",
      employeeList: [],
      mounted: false,
     

    }
  }

  async componentDidMount() {
    const e = []
    var data = []
    let isMounted = true
    
    fetch("/members").then(
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





  render() {

    return (

      <div className="App">
        
        
         
        <Stack direction="row" spacing={2}>

          <Button variant="contained" onClick={() => this.changeData("Total")} >Total Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Access")}  >Access Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Help")} >Help / Assistance Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Fail")}  >Failure Stats</Button>
          <Button variant="contained" onClick={() => this.changeData("Incidents")}  >View Stats</Button>
          <DateSelector filterDate={this.setFromDate} label={"From"} />
          <p3> ____</p3>
          <DateSelector filterDate={this.setToDate} label={"To"} />
          {console.log(this.state)}
        </Stack>
          
        <div className="App2">

          <Dashboard mounted={this.state.mounted} data={this.state.data} dataChoice={this.state.dataChoice} filterDate={this.state.filterDate} date={this.state.date} />


        </div>
      </div>


    );




  }

}