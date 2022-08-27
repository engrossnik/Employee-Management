/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { withRouter } from 'react-router-dom';

// import logo from './assets/engross-infotech-logo.png';


const Dashboard = (props) => {
  return (
    <React.Fragment>   
   <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                
                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
                
              </div>
      </div>
    </React.Fragment>
    )
}
export default withRouter(Dashboard);
