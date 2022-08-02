import React from "react";
import Indicator from "../components/Indicator";
import Wallet from "../components/SVG's/Wallet";
import Graph from "../components/SVG's/Graph";
import Container from "../components/Container";
// import {LabeledSwitch} from '@aave/aave-ui-kit';
import "../css/Dashboard.css";
import ToggleContainerSupply from './../components/ToggleContainerSupply';
import ToggleContainerBorrow from './../components/ToggleContainerBorrow';

const Dashboard = () => {
  return (
    <>
    {/* upper div with indicators */}
      <div className="d-flex flex-column align-items-center">
        <div className="global_upper_container d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column" style={{ width: '90%' }}>
            <div className="d-flex flex-column align-items-start">
              <div className="fs-5 d-block d-md-none fw-bold" style={{ color: '#A5A8B6' }}>Dashboard</div>
              <div className="d-flex align-items-center">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png" height="30px" width="30px" alt="" />
                <h2 className="fw-bold text-light mx-1">Ethereum Market</h2>
              </div>
            </div>
            {/* indicators */}
            <div className="d-flex flex-wrap">
              <Indicator svg={Wallet} headText="Net Worth" value="15" symbol="$" />
              <Indicator svg={Graph} headText="Net APY" value="10" symbol="%" />
            </div>
          </div>
        </div>

        {/* labeled switch for small to larger devices */}
        {/* <LabeledSwitch value={true} leftOption="Supply" rightOption="Borrow" width="300" height="50" /> */}

        <div className="d-flex flex-xl-row flex-column" style={{ width: '90%', position: 'relative', zIndex: '1', marginTop: '-30px' }}>
          {/* supply assets */}
          <div className="supply">
            <Container />
            <ToggleContainerSupply id="supply" />
          </div>
          {/* borrow assets */}
          <div className="borrow">
            <Container />
            <ToggleContainerBorrow id="borrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
