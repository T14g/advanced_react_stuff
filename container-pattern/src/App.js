import BookInfo from "./components/book-info";
import UserInfo from "./components/user-info";
import { ResourceLoader } from "./components/resource-loader";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/0" resourceName="user">
        <UserInfo/>
      </ResourceLoader>
      <ResourceLoader resourceUrl="/books/1" resourceName="book">
        <BookInfo/>
      </ResourceLoader>
    </>
  );
}
export default App;
