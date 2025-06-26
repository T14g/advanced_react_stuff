import BookInfo from "./components/book-info";
import UserInfo from "./components/user-info";
import DataSource from "./components/data-source";
import axios from "axios";
import DataSourceWithRender from "./components/data-source-with-render";

const getData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
}

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSourceWithRender getData={() => getData("/users/1")}
        render={(resource) => <UserInfo user={resource} />}>
      </DataSourceWithRender>
      <DataSource getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}
export default App;
