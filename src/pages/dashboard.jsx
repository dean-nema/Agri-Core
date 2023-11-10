
import { useNavigate } from 'react-router-dom';
import InventoryNavigation from '../components2/inveNav';
import CardLineChart from '../components2/salesGraph';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Chart1 from '../partials/dashboard/chart1';
import Chart2 from '../partials/dashboard/chart2';
import Calendar from '../components2/calendar';


function Dashboard({authen, farmer}) {
  const navigate = useNavigate();
  return (
            authen ? (
            <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <main>
                <div className="bg-yellow-300 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                  <WelcomeBanner farmer={farmer} />
      
                  <div className="grid grid-cols-12 gap-6">
                    {/* Doughnut chart (Top Countries) */}
                    <div className="col-span-12 lg:col-span-4">
                      <Chart1 />
                    </div>
                    {/* Line chart (Acme Advanced) */}
                    <div className="col-span-12 lg:col-span-4">
                      <Chart2 farmer={farmer}/>
                    </div>
                    {/* Line chart (Acme Professional) */}
                    <div className=" bg-green-600 col-span-12 lg:col-span-4">
                    <Calendar/>
                    </div>
                   {/* <BarGraph></BarGraph> */}
                  </div>
                  <InventoryNavigation/>
                </div>
              </main>
            </div>
          </div>
           ): (
            <> 
            {navigate("/")}
            
            </>
           )
          
  )
}

export default Dashboard;
