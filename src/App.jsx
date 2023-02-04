import logo from "./logo.svg";
import "./App.css";
import img1 from "./no1.png";
import img2 from "./no2.png";
import img3 from "./no3.png";

function App() {
  return (
    <>
    {/* ========1 */}
  <section className="style-guide">
    <div className=" bg-slate-100 ">
      <h1 className="text-center text-blacky-0 text-4xl pt-20 pb-20 md:pt-36 md:pb-36 lg:pt-44 lg:pb-44 md:text-6xl lg:text-7xl">Style Guide</h1>
    </div>
  </section>
{/* =========2 */}
  <div className="grid-system">
   <div className="w-[400px] ml-3 lg:w-[970px] md:w-[750px]">
    <h2 className="text-3xl text-blacky-0 pt-20 pb-2 lg:text-5xl lg:pt-12 font-frank lg:pb-12">Grid System</h2>
    <div className="bg-slate-500 h-1 w-32 rounded-lg"></div>
    <div className="header ">
      <h3 className=" pt-10 pb-3 text-blacky-0 font-frank text-2xl lg:text-5xl">The Table of grid system sizes</h3>
    </div>
    <div className="flex text-center md:block font-frank justify-evenly text-lg pt-3 pb-3">
      <div className="item w-1/2 md:w-full md:flex ">
        <p className="border border-l-800 border-t-800 md:w-52 text text-graywhite-0 pt-4 pb-4">Device Width</p>
        <p className="border border-l-800 border-t-800 md:w-36 pt-4 text-graywhite-0 pb-4">992px</p>
        <p className="border border-l-800 border-t-800 md:w-36 pt-4 text-graywhite-0 pb-4">992px</p>
        <p className="border border-l-800 border-t-800 md:w-36 pt-4 text-graywhite-0 pb-4">767px</p>
        <p className="border border-l-800 border-t-800 md:w-36 border-b-800 pt-4 text-graywhite-0 pb-4"> 479px</p>
      </div>
   
      <div className="item text-center w-1/2 md:w-full md:flex">
        <p className="border border-l-800 md:w-52 border-t-800 border-r-800 text-graywhite-0 pt-4 pb-4">Max Container Width</p>
        <p className="border border-l-800 md:w-36 border-t-800 border-r-800 text-graywhite-0 pt-4 pb-4">1200px</p>
        <p className="border border-l-800 md:w-36 border-t-800 border-r-800 text-graywhite-0 pt-4 pb-4">100%</p>
        <p className="border border-l-800 md:w-36 border-t-800 border-r-800 text-graywhite-0 pt-4 pb-4">100%</p>
        <p className="border border-l-800 md:w-36 border-t-800 border-r-800 border-b-800 text-graywhite-0 pt-4 pb-4">100%</p>
      </div>
    </div>
   </div>
  </div>
{/* =============3 */}
 <section className="spacing-system">
  <div className="w-[400px] ml-3 pt-10 lg:w-[970px] font-frank">
   <h2 className="text-3xl text-blacky-0 pt-5 pb-2 lg:pt-20 lg:text-5xl">Spacing System</h2>
   <div className="bg-slate-500 h-1 w-44 rounded-lg"></div>

   <div className="All lg:flex md:flex md:justify-evenly md:w-[750px]">
    <div className="item-1 pl-3 bg-slate-100 rounded-lg mt-7">
      <h3 className="text-2xl text-blacky-0 pt-5 pb-5 md:text-xl">Spacing Desktop</h3>
      <div className="image relative">
        <img src={img1} className="w-64 md:w-48 lg:w-80" alt="" />
        <p className="absolute font-semibold md:text-sm text-graywhite-0 right-10 md:right-12 bottom-44 md:bottom-32">122px</p>
        <p className="absolute font-semibold md:text-xs text-graywhite-0 right-20 md:right-16 bottom-[92px]">122px</p>
        <p className="absolute font-semibold md:text-sm text-graywhite-0  right-14 bottom-3">122px</p>
      </div>
      <p className="text-md pt-5 pb-5 text-graywhite-0 md:text-sm">- padding Tops and Bottom for Blocks - <strong> 120px </strong><br /> -Inside of Blocks (between headlines and inside a content block) <strong> -60px </strong> </p>
    </div>
    <div className="item-2 pl-3 bg-slate-100 rounded-lg mt-7">
      <h3 className="text-2xl text-blacky-0 pt-5 pb-5 md:text-xl">Spacing Tablet</h3>
      <div className="image relative">

        <img src={img1} className="w-64 md:w-48 lg:w-80" alt="" />
        <p className="absolute font-semibold md:text-sm text-graywhite-0 right-10 md:right-12 bottom-44 md:bottom-32">122px</p>
        <p className="absolute font-semibold md:text-xs text-graywhite-0 right-20 md:right-16 bottom-[92px]">122px</p>
        <p className="absolute font-semibold md:text-sm text-graywhite-0  right-14 bottom-3">122px</p>
      </div>
      <p className="text-md pt-5 pb-5 text-graywhite-0 md:text-sm">- padding Tops and Bottom for Blocks - <strong> 120px </strong><br /> -Inside of Blocks (between headlines and inside a content block) <strong> -60px </strong> </p>
    </div>
    <div className="item-3 pl-3 bg-slate-100 rounded-lg mt-7">
      <h3 className="text-2xl text-blacky-0 pt-5 pb-5 md:text-xl">Spacing Mobile</h3>
      <div className="image relative">
        <img src={img1} className="w-64 md:w-48 lg:w-80" alt="" />
        <p className="absolute font-semibold md:text-sm text-graywhite-0 right-10 md:right-12 bottom-44 md:bottom-32">122px</p>
        <p className="absolute font-semibold md:text-xs text-graywhite-0 right-20 md:right-16 bottom-[92px]">89px</p>
        <p className="absolute font-semibold md:text-sm text-graywhite-0 right-14 bottom-3">122px</p>
      </div>
      <p className="text-md pt-5 pb-5 text-graywhite-0 md:text-sm">- padding Tops and Bottom for Blocks - <strong> 120px </strong><br /> -Inside of Blocks (between headlines and inside a content block) <strong> -60px </strong> </p>
    </div>
   </div>
  </div>
 </section>
  {/* ===========4 */}
  <section className="color-pallete bg-slate-100 mt-4">
    <div className="w-[400px] ml-3 lg:w-[970px] font-frank">
      <h2 className="text-4xl text-blacky-0 pt-16 pb-2 lg:text-5xl">Color Palette</h2>
   <div className="bg-slate-500 h-1 w-44 rounded-lg"></div>

      <div className="mix lg:flex lg:justify-around md:flex">
        <div className="primary">
          <h3 className="text-3xl text-blacky-0 pt-6 pb-6">Primary</h3>
          <div className="flex pl-6 pt-10 pb-10">
            <div className=""><div className="w-20 h-20 bg-whity-0 rounded-md "></div>  <p className="text-graywhite-0 text-center pt-4">#f3f4545</p> </div>
            <div className="lg:pl-5 pl-9"><div className="w-20 h-20 bg-blacky-0 rounded-md"></div>  <p className="text-graywhite-0 text-center pt-4">#f3f4545</p> </div>
            <div className="lg:pl-5 pl-9"><div className="w-20 h-20 bg-pinkish-0 rounded-md"></div> <p className="text-graywhite-0 text-center pt-4">#f3f4545</p> </div>
          </div>
          
        </div>
        <div className="secondary md:pl-10">
        <h3 className="text-3xl text-blacky-0 pt-6 pb-6">Secondary</h3>
          <div className="flex  pl-6 pt-10 pb-10">
            <div className="lg:pl-5"><div className="w-20 h-20 bg-whity-0 rounded-md"></div> <p className="text-graywhite-0 text-center pt-4">#f3f4545</p></div>
            <div className="lg:pl-5 pl-9"><div className="w-20 h-20 bg-graywhite-0 rounded-md"></div> <p className="text-graywhite-0 text-center pt-4">#f3f4545</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ===========5 */}
  <section>
    <div className="typography w-[400px] lg:w-[970px] ml-3 font-frank">
      <div className="pb-16"><h2 className="text-4xl text-blacky-0 pt-16 pb-3">Typography</h2>
   <div className="bg-slate-500 h-1 w-40 rounded-lg"></div></div>

      <div className="head">
        <div className="all">
          <div className=" lg:flex">
          <div className="head1">
            <h3 className="text-2xl text-blacky-0">Headers - Desktop</h3>
            <div> <h1 className="text-6xl pt-2 text-blacky-0 pb-5">Heading 1</h1></div>
            <div> <h1 className="text-5xl pt-5 text-blacky-0 pb-5">Heading 2</h1></div>
            <div> <h1 className="text-3xl pt-5 text-blacky-0 pb-5">Heading 3</h1></div>
            <div> <h1 className="text-2xl pt-5 text-blacky-0 pb-5">Heading 4</h1></div>
            <div> <h1 className="text-xl pt-5 text-blacky-0 pb-5">Heading 5</h1></div>
            <div> <h1 className="text-lg pt-5 text-blacky-0 pb-5">Heading 6</h1></div>
          </div>
          <div className="head2 lg:pl-48">
          <h3 className="text-2xl text-blacky-0 pt-16">Headers - Tablet</h3>
          <div> <h1 className="text-6xl pt-2 text-blacky-0 pb-5">Heading 1</h1></div>
            <div> <h1 className="text-5xl pt-5 text-blacky-0 pb-5">Heading 2</h1></div>
            <div> <h1 className="text-3xl pt-5 text-blacky-0 pb-5">Heading 3</h1></div>
            <div> <h1 className="text-2xl pt-5 text-blacky-0 pb-5">Heading 4</h1></div>
            <div> <h1 className="text-xl pt-5 text-blacky-0 pb-5">Heading 5</h1></div>
            <div> <h1 className="text-lg pt-5 text-blacky-0 pb-5">Heading 6</h1></div>
          </div>
          </div>
          <div className="head3">
          <h3 className="text-2xl text-blacky-0 pt-16">Headers - Mobile</h3>
          <div> <h1 className="text-6xl pt-2 pb-5 text-blacky-0">Heading 1</h1></div>
            <div> <h1 className="text-5xl pt-5 pb-5 text-blacky-0">Heading 2</h1></div>
            <div> <h1 className="text-3xl pt-5 pb-5 text-blacky-0">Heading 3</h1></div>
            <div> <h1 className="text-2xl pt-5 pb-5 text-blacky-0">Heading 4</h1></div>
            <div> <h1 className="text-xl pt-5 pb-5 text-blacky-0">Heading 5</h1></div>
            <div> <h1 className="text-lg pt-5 pb-5 text-blacky-0">Heading 6</h1></div>
          </div>
        </div>
      </div>
      <div className="body">
        <h2 className="text-4xl pt-4 pb-2 text-blacky-0">Body</h2>
   <div className="bg-slate-500 h-1 w-16 rounded-lg"></div>

        <div className="lg:flex pt-4">
          <div className="paraS pt-4 pb-4 pl-3 bg-slate-100 rounded-lg lg:w-[1000px] md:w-[750px]">
          <h2 className="text-3xl pt-4 pb-4 text-blacky-0">Paragraph</h2>
          <p className="text-md pt-1 pb-1 text-graywhite-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia, quaerat qui voluptas suscipit earum, laudantium quam ab officia recusandae.</p>
          </div>
          <br />
          <br />
          <div className="paraL pt-4 pb-4 pl-3 bg-slate-100 rounded-lg lg:w-[1000px] md:w-[750px] lg:pl-8">
          <h2 className="text-3xl pt-4 pb-4 text-blacky-0">Paragraph Large</h2>
          <p className="font-medium text-lg pt-1 pb-1 text-graywhite-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia, quaerat qui voluptas suscipit earum, laudantium quam ab officia recusandae.</p>
          </div>
        </div>
      </div>
      <div className="link pt-16 pb-5">
      <h1 className="text-3xl pt-2 pb-2 text-blacky-0">Links</h1>
      <h1 className="text-xl pt-2 pb-2 text-blacky-0">Links</h1>
      <h1 className="text-2xl pt-2 pb-2 text-blacky-0">Look more</h1>
      </div>
    </div>
  </section>
  {/* ===========6 */}
  <section> 
    <div className="w-[400px] lg:w-[970px] md:[750px] ml-3">
      <h2 className="text-4xl pt-12 pb-3 text-blacky-0">Buttons</h2>
   <div className="bg-slate-500 h-1 w-24 rounded-lg"></div>

      <div className="lg:flex lg:justify-between md:flex md:justify-between">
        <div className="primary">
          {/* <h2 className="text-3xl text-blacky-0">Primary Button</h2> */}
          <div className="pt-6 pb-6"><center><button className=" h-12 w-32 border border-blue-400 rounded-lg ">Primary Button</button></center></div>
        </div>
        <div className="primary-dark md: pl-20">
        {/* <h2 className="text-3xl text-blacky-0">Primary Button Dark</h2> */}
        <div className="pt-6 pb-6 "><center><button className=" h-12 w-32  bg-black text-gray-100 rounded-md">Button Dark</button></center></div>

        </div>
        <div className="secondary shadow-6xl md: pl-20">
        {/* <h2 className="text-3xl text-blacky-0">Secondary Button</h2> */}
        <div className="pt-6 pb-6 "><center> <button className=" h-12 w-32 rounded-md">Secondary Button</button></center></div>

        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default App;
