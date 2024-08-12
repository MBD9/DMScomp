// import { Route, Routes } from "react-router-dom";
// import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
// import LogCompalint from "./components/AdminComponents/LogCompalint";
// import DealerLogIn from "./components/AdminComponents/DealerLogIn";
// import MyComplaints from "./components/AdminComponents/MyComplaints";
// import PendingComplaint from "./components/AdminComponents/PendingComplaint";
// import CompletedComplaints from "./components/AdminComponents/CompletedCommplaint";
// function App() {
//   let storedDealer = JSON.parse(localStorage.getItem('currentUser'));
//   if (!storedDealer) {
//     const storedDealer = {
//       DealerID: 1,
//       UserName: 123,
//       UserType: "Retailer",
//       FirstName: "John",
//       LastName: "Doe",
//       Email: "john.doe@example.com",
//       Region: "North",
//       ControlArea: 1,
//       CreditAvail: 10000,
//       CreditExpose: 5000,
//       CreditLimit: 15000,
//       Discount: 10,
//       SatelliteUser: false,
//       Role: {
//         name: "Manager",
//         permissions: ["view", "edit"]
//       },
//       ChannelList: ["Online", "Retail"],
//       ReturnMsg: "No returns allowed"
//     };

//     // Convert object to JSON string
//     const storedDealerString = JSON.stringify(currentUser);

//     // Store in local storage
//     localStorage.setItem('currentUser', storedDealerString);

//   }
// }
// return (
//   <Routes>
//     <Routes path='/login' element={<DealerLogIn />} />
//     <Route path="/" element={<AdminDashBoard />}>
//       <Route index element={<LogCompalint />} />
//       <Route path="log-complaint" element={<LogCompalint />} />
//       <Route path="My-complaint" element={<MyComplaints />} />
//       <Route path="Pending-Complaints" element={<PendingComplaint />} />
//       <Route path="Complete-Complaints" element={<CompletedComplaints />} />
//     </Route>
//   </Routes>
// );


// export default App;
import { Route, Routes } from "react-router-dom";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import LogCompalint from "./components/AdminComponents/LogCompalint";
import DealerLogIn from "./components/AdminComponents/DealerLogIn";
import MyComplaints from "./components/AdminComponents/MyComplaints";
import PendingComplaint from "./components/AdminComponents/PendingComplaint";
import CompletedComplaints from "./components/AdminComponents/CompletedCommplaint";

function App() {
  // Retrieve the stored dealer from local storage
  let storedDealer = JSON.parse(localStorage.getItem('currentUser'));

  // If no dealer data is found, create a default object and store it
  if (!storedDealer) {
    const defaultDealer = {
      DealerID: 1,
      UserName: 123,
      UserType: "Retailer",
      FirstName: "John",
      LastName: "Doe",
      Email: "john.doe@example.com",
      Region: "North",
      ControlArea: 1,
      CreditAvail: 10000,
      CreditExpose: 5000,
      CreditLimit: 15000,
      Discount: 10,
      SatelliteUser: false,
      Role: {
        name: "Manager",
        permissions: ["view", "edit"]
      },
      ChannelList: ["Online", "Retail"],
      ReturnMsg: "No returns allowed"
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('currentUser', JSON.stringify(defaultDealer));
  }

  // Return the routes for the application
  return (
    <Routes>
      <Route path='/login' element={<DealerLogIn />} />
      <Route path="/" element={<AdminDashBoard />}>
        <Route index element={<LogCompalint />} />
        <Route path="log-complaint" element={<LogCompalint />} />
        <Route path="my-complaint" element={<MyComplaints />} />
        <Route path="pending-complaints" element={<PendingComplaint />} />
        <Route path="completed-complaints" element={<CompletedComplaints />} />
      </Route>
    </Routes>
  );
}

export default App;
