
import firstim from "../assets/pictures/first.jpg";
import fourthIm from "../assets/pictures/fourth.jpg";
import Details from "../components2/HomeDetails";
import Footer from "../components2/footer";

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

const HomePage = () => {
    return (
        <section className="h-screen mb-40 lime-700 ">
        {/* <!-- Landpage Picture display --> */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '50%',
      backgroundImage: `url(${fourthIm})`,
      height: '500px'
    }}>
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            AGRI-CORE<br /><span>Where Agriculture Lives</span>
          </h1>
          <button
            type="button"
            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px]  bg-lime-950 text-sm font-medium uppercase leading-normal text-yellow-100 text-neutral-0 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-50 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
  Get started
</button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End of picture Display --> */}
      {/* Home page details */}
      <Details/>
      {/* End of details */}
      <section className="relative isolate overflow-hidden bg-lime-800  px-6 sm:py-32 lg:px-8 h-1">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%]  origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
  
  <figure className="absolute top-0">
    <blockquote className="text-center text-xl font-bold leading-8 text-blue-950 sm:text-2xl sm:leading-9">
      <p >
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
        molestiae. Numquam corrupti in laborum sed rerum et corporis.”
      </p>
    </blockquote>
    <figcaption>
      <img
        className="mx-auto h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="mt-0 flex items-center justify-center space-x-3 text-base">
        <div className="font-semibold text-gray-900">Judith Black</div>
        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
          <circle cx={1} cy={1} r={1} />
        </svg>
        <div className="text-gray-600">CEO of Workcation</div>
      </div>
    </figcaption>
  </figure>
</section>

{/* <!-- End of container --> */}
{/*statistics*/}
<div className="bg-lime-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
{/* End of statistics*/}
{/* More Details*/}
<div className="bg-lime-300">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative bg-lime-500 isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={firstim}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
{/*End of details Details*/}

       {/* footer section */}
       <Footer/>
       {/* End of footer  */}
      </section>
      
       
    );
  };
  
  export default HomePage;
  