import BookInfo from "./components/book-info";
import UserInfo from "./components/user-info";
import DataSource from "./components/data-source";
import axios from "axios";

const getData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource getData={() => getData("/users/1")}
        resourceName={"user"}>
        <UserInfo />
      </DataSource>
      <DataSource getData={() => getData("/books/1")}
        resourceName={"book"}>
        <BookInfo />
      </DataSource>
    </>
  );
}
export default App;
