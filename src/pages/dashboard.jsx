
import InventoryNavigation from '../components2/inveNav';
import CardLineChart from '../components2/salesGraph';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Chart1 from '../partials/dashboard/chart1';
import Chart2 from '../partials/dashboard/chart2';


function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="bg-yellow-300 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            <div className="grid grid-cols-12 gap-6">
              {/* Doughnut chart (Top Countries) */}
              <div className="col-span-12 lg:col-span-4">
                <Chart1 />
              </div>
              {/* Line chart (Acme Advanced) */}
              <div className="col-span-12 lg:col-span-4">
                <Chart2/>
              </div>
              {/* Line chart (Acme Professional) */}
              <div className=" bg-green-600 col-span-12 lg:col-span-4">
              <CardLineChart/>
              </div>
             
            </div>
            <InventoryNavigation/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
