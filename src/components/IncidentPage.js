import Incident from "./incident"
import React, {useState, useEffect} from "react"
import SearchFilter from "./Dropdown"
import { AiTwotoneFunnelPlot} from "react-icons/ai";
import "../App.css"
import { Button } from "@mui/material";





const IncidentPage = props =>{
    var tickets = []
    const [ticketList, setList]=useState([])
    const [showFilter, changeFilter] = useState(false)
    const [filters, setFilters] = useState(["None","None","None","None","None"])
    const [direction, setDirection] = useState(false)
    const [value, setValue] = useState("Date")
    const [filteredList, setFilterd] = useState([])
    const [user, setUser] = useState([])

    useEffect(()=>{
        setUser(props.user)
        var filterList = props.data

            if(filters[0] != "None"){
                filterList = filterList.filter(ticket => ticket.assignedTo == filters[0])
              
            }

            if(filters[1] != "None"){
                filterList = filterList.filter(ticket => ticket.caller == filters[1])
                
            }
            if(filters[2] != "None"){
                filterList = filterList.filter(ticket => ticket.contactType == filters[2])
              

            }
            if(filters[3] != "None"){
                filterList = filterList.filter(ticket => ticket.state == filters[3])
                
            }
            if(filters[4] != "None"){
                filterList = filterList.filter(ticket => ticket.category == filters[4])
                
                
            }
            else{
                setFilterd(filterList)
            }
           
                        
            
            setFilterd(filterList)
            sortByDate(filterList)

            
    
        
    }, [props, showFilter])

    const toggleFilter = () =>{
        changeFilter(!showFilter)
        setFilterd(props.data)
    
    }

    const getFilters = (filter) =>{
        setFilters(filter)
        
    }
    const sortByDate = (filteredList) =>{
            const sorted = [...filteredList].sort((a,b) => a.timeCreated - b.timeCreated)
            setFilterd(sorted)
    }

  

  
    

    return(
        <div>
            <div className="search"> 
              <h3>Filter </h3>
              <div style={{paddingRight: "10%"}} >
                <AiTwotoneFunnelPlot fontSize="25px" onClick={toggleFilter} /> {showFilter && <SearchFilter data={props.data} filter={getFilters} toggle={toggleFilter} filterList={filters}/>}
                {user.admin === true ? <Button variant="contained" >Edit Permissons</Button> : <span></span>}
              </div>
              <div>
                
                <p1>{filteredList.length} tickets</p1>
              </div>

            
           
            </div>
              
             
              
            <div className="incident">
           
              <p1> Assigned To</p1>
              <p1>Caller</p1>
              <p1>Time created</p1>
              <p1>Contact type</p1>
              <p1>State</p1>
              <p1>Category</p1>
              

            

            </div>

            {

                filteredList.map(ticket =>
                    <Incident data={ticket}/>
                
                )
            }
        </div>
    )
}

export default IncidentPage;