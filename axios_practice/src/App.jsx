import FetchAndPostData from "./components/FetchAndPostData";
import DeletePost from "./components/DeletePost";
import "./App.css";
import Multi_Request from "./components/Multi_Request";
import CustomHeader from "./components/CustomHeader";
import Axios_Interceptors from "./components/Axios_Interceptors";
import EndService from "./components/EndService";

function App() {
  return (
    <>
      <div>
        <FetchAndPostData />
        <DeletePost />
        <Multi_Request />
        <CustomHeader />
        <Axios_Interceptors />
        <EndService />
      </div>
    </>
  );
}

export default App;
