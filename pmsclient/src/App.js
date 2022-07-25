import React from 'react';
import Login from "./components/Login"
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Fake} from "../src/Pages/Fake"
import Test from "../src/Pages/Test"
import Empty from './Pages/Empty';
import Verify from "./components/VerifyComponent"
import Verifysuccess from "./components/VerificationSuccess"
import Verifyfail from './components/verifyfail';
import Passwordreset from "./components/Forgotpasscomp"
import Addproperty from "./Pages/Addproperty"
import Addproperty2 from "./Pages/Addproperty2"
import Addpropstep1 from "./Pages/Addpropstep1";
import Addpropstep2 from "./Pages/Addpropstep2";
import Addpropstep3 from "./Pages/Addpropstep3";
import Addpropstep4 from "./Pages/Addpropstep4";
import Addpropstep5 from "./Pages/Addpropstep5";
import Addpropstep6 from "./Pages/Addpropstep6";
import Addpropstep7 from "./Pages/Addpropstep7";
import Addpropstep8 from "./Pages/Addpropstep8";

// import Nameless from "./Pages/nameless"
// import Addpropstep7 from "./Pages/Addpropfolder/Addpropstep7";

const App = () => {
  return(
    <Router>
      
        <Routes>
            <Route path="/confirm/:verificationcode" element={<Verify/>} />
            <Route path="/verifysuccess" element={<Verifysuccess/>} />
            <Route path="/verifyfail" element={<Verifyfail/>} />
            <Route path="/signin" element={<Login/>} />
            <Route path="/passwordreset" element={<Passwordreset />}  />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Sidebar />} >
                <Route>
                  <Route path="/dashboard" element={<Empty />} />  
                  <Route index element={<Test />  } />  
                </Route>

                <Route >

                   <Route path="/properties/list-property" element={<Addpropstep1 />} />    
                  <Route path="/properties/list-property/step1" element={<Addpropstep1 />} />                       
                  <Route path="/properties/list-property/step2" element={<Addpropstep2 />} />             
                  <Route path="/properties/list-property/step3" element={<Addpropstep3 />} />            
                  <Route path="/properties/list-property/step4" element={<Addpropstep4 />} />            
                  <Route path="/properties/list-property/step5" element={<Addpropstep5 />} />                          
                  <Route path="/properties/list-property/step6" element={<Addpropstep6 />} />  
                  <Route path="/properties/list-property/step7" element={<Addpropstep7 />} />   
                  <Route path="/properties/list-property/step8" element={<Addpropstep8 />} />   
                  {/* <Route path="/properties/list-property/step7" element={<Addpropstep11 />} />   
                  <Route path="/properties/list-property/step7" element={<Addpropstep11 />} />            
                  <Route index element={<Addproperty2 />  } />    */}
              </Route>

              <Route>
                <Route path="/properties/find-new-properties" element={<Empty />} />
                <Route index element={<Empty />  } />   
              </Route>

              <Route>
                <Route path="/landlords/all-landlords" element={<Test />} />
                <Route path="/landlords/create-new-landlord" element={<Test />} />
                <Route path="/landlords/find-landlord" element={<Fake />} />
                <Route index element={<Empty />  } />   
              </Route>
              <Route  > 
               <Route path="/units/all-units" element={<Test />} /> 
               <Route path="/units/create-new-unit" element={<Fake />} /> 
               <Route path="/units/find-unit" element={<Test />} /> 
               <Route index element={<Test />} /> 
              </Route>
              <Route>
                <Route path="/maintenance/all-technicians" element={<Fake />} />
                <Route path="/maintenance/add-new-technician" element={<Test />} />
                <Route index element={<Empty />  } />   
              </Route>
              <Route>
                <Route path="/caretakers/all-caretakers" element={<Test />} />
                <Route path="/caretakers/create-new-caretaker" element={<Fake />} />
                <Route path="/caretakers/find-caretaker" element={<Empty />} />
                <Route index element={<Empty />  } />   
              </Route>
              <Route>
                <Route path="/attachments/work-orders" element={<Test />} />
                <Route path="/attachments/evacuation-notice" element={<Fake />} />
                <Route path="/attachments/invoices" element={<Fake />} />
                <Route path="/attachments/payment-receipt" element={<Test />} />
                <Route path="/attachments/rental-Agreement" element={<Fake />} />
                <Route index element={<Empty />  } />   
              </Route>
              <Route>
                <Route path="/reports/monthy-expenses" element={<Test />} />
                <Route path="/reports/monthly-income" element={<Fake />} />
              </Route>
              <Route>
                <Route path="/support" element={<Fake />} />  
                <Route index element={< Fake/>  } />  
              </Route>
        </Route> 
         
          
      </Routes>
          
    </Router>

  )
};

export default App;
