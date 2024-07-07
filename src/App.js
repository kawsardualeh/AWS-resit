import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

function App() {
  const [nScore, setNScore] = useState("");
  const [rScore, setRScore] = useState("");
  const [sScore, setSScore] = useState("");
  const [aScore, setAScore] = useState("");
  const [cScore, setCScore] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [services, setServices] = useState([]);
  const [downtimes, setDowntimes] = useState({
    daily: "",
    weekly: "",
    monthly: "",
    yearly: ""
  });
  const handleDropDownItem = (data) => {
    const updatedServices = [...services, {...data}];
    setServices([...updatedServices]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nScore >= 100 || rScore >= 100 || sScore >= 100 || aScore >= 100 || cScore >= 100) {
      alert('Please enter value not above 100');
      return;
    }

    if (nScore <= 0 || rScore <= 0 || sScore <= 0 || aScore <= 0 || cScore <= 0) {
      alert('Please enter value above 0');
      return;
    }
    
    let score = ((nScore/100) * (rScore/100) * (sScore/100) * (aScore/100) * (cScore/100) * 100);

    if(score !== 0){
      let daily = (86400 - ((score/100) * 86400));
      let weekly = (604800 - ((score/100) * 604800));
      let monthly = (2592000 - ((score/100) * 2592000));
      let yearly = (31536000 - ((score/100) * 31536000));

      setDowntimes({ 
        daily: prettyTime(daily.toFixed(0)),
        weekly: prettyTime(weekly.toFixed(0)),
        monthly: prettyTime(monthly.toFixed(0)), 
        yearly: prettyTime(yearly.toFixed(0)),
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let score = 0;
  //   if (nScore) {
  //     let nScorePer = nScore/100;
  //     score *= nScorePer;
  //   }
  // };
 
  return (
    <div className='container'>

    <div className="App">
      <h3 className='mt-5 text-white bg-dark'>
        AWS Infrastructure Downtime Calculator 
      </h3>
      <p>
      Our tool is specifically developed to assist you in meeting SLA requirements, by inputting your desired uptime percentages, our calculator will determine the downtimes. 
        These downtime calculations help teams and organisations predict their infrastructure availability.
      </p>
      <div className="row mt-5">
        <div className="col-6">
          {/* <div className="d-flex p-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"bottom"}>
              <DropdownToggle caret>Dropdown</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleDropDownItem({"key": "node", "value": "0"})}>Node</DropdownItem>
                <DropdownItem onClick={() => handleDropDownItem({"key": "db", "value": "0"})}>Database</DropdownItem>
                <DropdownItem onClick={() => handleDropDownItem({"key": "vpn", "value": "0"})}>VPN</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div> */}
          {/* <div>
            {services?.map((item) => (
              <>
                <p>{item.key}</p>
                <input onChange={(e) => setScore(e.target.value)}></input>
              </>
            ))}
          </div> */}
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input 
              type="text" 
              value={nScore}
              onChange={(e) => setNScore(e.target.value)}
              className="form-control" 
              placeholder="Enter Node Availability Score" 
              aria-label="Enter Availability Score" 
              aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">%</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input 
              type="text" 
              value={rScore}
              onChange={(e) => setRScore(e.target.value)}
              className="form-control" 
              placeholder="Enter Routers Availability Score" 
              aria-label="Enter Availability Score" 
              aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">%</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input 
              type="text" 
              value={sScore}
              onChange={(e) => setSScore(e.target.value)}
              className="form-control" 
              placeholder="Enter Service Availability Score" 
              aria-label="Enter Availability Score" 
              aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">%</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input 
              type="text" 
              value={aScore}
              onChange={(e) => setAScore(e.target.value)}
              className="form-control" 
              placeholder="Enter Applications Availability Score" 
              aria-label="Enter Availability Score" 
              aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">%</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input 
              type="text" 
              value={cScore}
              onChange={(e) => setCScore(e.target.value)}
              className="form-control" 
              placeholder="Enter Communication by Internal Availability Score" 
              aria-label="Enter Availability Score" 
              aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">%</span>
              </div>
            </div>
            <input
             type='submit' 
             className='mt-2 btn btn-success'
            />
          </form>
        </div>
        <div className="col-6"> 
        <table className='table'>
            <thead>
              <tr>
                <th>
                  Metric
                </th>
                <th>
                  Downtimes
                </th>
              </tr>           
            </thead>

            <tbody>
              <tr>
                <td>Daily</td>
                <td><mark>{downtimes.daily}</mark></td>
              </tr>
              <tr>
                <td> Weekly</td>
                <td><mark>{downtimes.weekly}</mark></td>
              </tr>
              <tr>
                <td>Monthly</td>
                <td><mark>{downtimes.monthly}</mark></td>
              </tr>
              <tr>
                <td>Yearly</td>
                <td><mark>{downtimes.yearly}</mark></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Table></Table>
    </div>
    </div>
  )
}
function prettyTime (time) {

  // calculate hours
  const hours = Math.floor(time / 60 / 60);
  // calculate minutes
  const minutes = Math.floor(time / 60) - (hours * 60);
  // calculate seconds
  const seconds = time % 60;

  // made pretty
  var prettyTime;
  if (hours !== 0) {
      prettyTime = hours + 'h ' + minutes + 'm ' + seconds + 's ';
  } else {
      if (minutes !== 0) {
          prettyTime = minutes + 'm ' + seconds + 's ';
      } else {
          prettyTime = seconds + 's ';
      }
  }

  return prettyTime;
}

export default App;
