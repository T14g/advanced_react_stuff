import { CurrentUserLoader } from "./components/current-user-loader";
import UserInfo from "./components/user-info";

function App() {
  return (
    <> <CurrentUserLoader userId={"0"}>
      <UserInfo />
    </CurrentUserLoader></>
  );
}
export default App;
