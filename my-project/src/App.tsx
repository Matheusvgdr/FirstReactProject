function App() {
  return (
    <div className="">

     <header className="bg-topBackground bg-cover w-[100vw] bg-no-repeat h-[100vh] ">

    <section className="">

        <nav className="flex justify-between  mx-[47px] py-6">

        <img src="./src/assets/logo.svg" alt="" />

          <ul className="flex justify-between gap-8 font-fontypeRounded font-bold">

            <a href="">
              <li>Home</li>
            </a>

            <a href="">
              <li>Stays</li>
            </a>

            <a href="">
              <li>Flights</li>
            </a>

            <a href="">
              <li>Packages</li>
            </a>

            <a href="">
              <li>Sign Up</li>
            </a>

          </ul>

        </nav>

        <div className="mx-[136px] mt-10">

          <h1 className="text-7xl text-white">The whole world <br/> awaits.</h1>

          <div className="flex justify-between py-2 px-4 rounded-2xl items-center backdrop-blur bg-white/50 my-10">

            <div className="flex items-center gap-3 text-white" >
              <i className="bx bx-search-alt-2 scale-[1.5] text-white"></i>
              <input className="bg-transparent outline-none" type="text" placeholder="Search destinations, hotels" />

            </div>

            <div className="flex items-center gap-3 text-white">
            <i className="bx bx-calendar-plus scale-[1.5]"></i>
            <p> Check in</p>

            </div>

            <div className="flex items-center gap-3 text-white">
            <i className="bx bx-calendar-minus scale-[1.5] "></i>
              <p> Check out</p>

            </div>

            <div className="flex items-center gap-3 text-white">

              <i className="bx bx-user scale-[1.5]"></i>
              <p>1 room, 2 adults</p>
              
            </div>

            <input type="submit" value="Search" className="bg-white py-3 px-11 rounded-3xl"/>
            
          </div>

          <section>

            <h2 className="text-[32px] text-white mb-8">Top categories</h2>
                    
            <div className="flex justify-between mb-14 ">

              <img src="../src/assets/beaches.svg" alt="" />
              <img src="../src/assets/deserts.svg" alt="" />
              <img src="../src/assets/mountains.svg" alt="" />
              <img src="../src/assets/cities.svg" alt="" />
              <img src="../src/assets/houseboats.svg" alt="" />
              <img src="../src/assets/countryside.svg" alt="" />
              <img src="../src/assets/camping.svg" alt="" />
              <img src="../src/assets/castles.svg" alt="" />
              <img src="../src/assets/skiing.svg" alt="" />
              <img src="../src/assets/tropical.svg" alt="" />
            
            </div>

          </section>

        <section className="">

          <h2 className="text-[32px] text-white mb-9">Top Vacation Destinations</h2>

          <div className="flex gap-6 overflow-x-auto">

              <div className="bg-bali bg-cover w-[410px] rounded-lg h-[200px] text-lg font-medium text-white ">
                <p className="absolute bottom-6 ml-6 backdrop-blur bg-white/20 px-3 py-2 rounded-xl">Bali, Indonesia</p>
              </div>

              <div className="bg-italia bg-cover w-[410px] rounded-lg h-[200px] text-lg font-medium text-white ">
                <p className="absolute bottom-6 ml-6 backdrop-blur bg-white/20 px-3 py-2 rounded-xl">Verona, Italy</p>
              </div>

              <div className="bg-ireland bg-cover w-[410px] rounded-lg h-[200px] text-lg font-medium text-white ">
                <p className="absolute bottom-6 ml-6 backdrop-blur bg-white/20 px-3 py-2 rounded-xl">Kerry, Ireland</p>
              </div>

              <div className="bg-paris bg-cover w-[410px] rounded-lg h-[200px] text-lg font-medium text-white ">
                <p className="absolute bottom-6 ml-6 backdrop-blur bg-white/20 px-3 py-2 rounded-xl">Paris, France</p>
              </div>

              <div className="bg-sydney bg-cover w-[410px] rounded-lg h-[200px] text-lg font-medium text-white ">
                <p className="absolute bottom-6 ml-6 backdrop-blur bg-white/20 px-3 py-2 rounded-xl">Sydney, Australia</p>
              </div>

          </div>


        </section>

        </div>

        

       
    </section>

     </header>
      
    </div>
    
  )
}

export default App
