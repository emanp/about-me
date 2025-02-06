import NavigationBar from "./Components/NavigationBar";
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div className=" h-screen w-screen">
      <NavigationBar />
      <div className="align-items-center text-black !important"> <Outlet /> </div>
    
    </div>
  )
}

export default App
