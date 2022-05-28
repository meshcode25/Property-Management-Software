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
              <Route>
                <Route path="/properties/list-property" element={<Test />} />
                <Route path="/properties/find-new-properties" element={<Fake />} />
                <Route index element={<Empty />  } />   
              </Route>
              <Route>
                <Route path="/landlords/all-landlords" element={<Test />} />
                <Route path="/landlords/create-new-landlord" element={<Fake />} />
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
