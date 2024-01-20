import Address from "./Components/Address";
import Password from "./Components/Password";
import PersonalInfo from "./Components/PersonalInfo";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PersonalInfo/>} />
            <Route path="/1" element={<Address/>} />
            <Route path="/2" element={<Password/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
