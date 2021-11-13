import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./contexts/AuthProvider";
import DeliveryProvider from "./contexts/DeliveryProvider";
import OrderProvider from "./contexts/OrderProvider";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ErrorScreen from "./screens/ErrorScreen";
import DoctorDetailScreen from "./screens/DoctorDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderSuccessfulScreen from "./screens/OrderSuccessfulScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import About from "./components/About/About";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import Covid from "./components/Covid/Covid";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route path="/home">
                <HomeScreen />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/alldoctors">
                <AllDoctors />
              </Route>
              <Route path="/covid">
                <Covid />
              </Route>
              <Route path="/faq">
                <Faq />
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <PublicRoute path="/signin">
                <SignInScreen />
              </PublicRoute>
              <PublicRoute path="/signup">
                <SignUpScreen />
              </PublicRoute>
              <PrivateRoute exact path="/doctors/:title">
                <DoctorDetailScreen />
              </PrivateRoute>
              <PrivateRoute path="/orders">
                <PlaceOrderScreen />
              </PrivateRoute>
              <PrivateRoute path="/order-successful">
                <OrderSuccessfulScreen />
              </PrivateRoute>
              <Route path="*">
                <ErrorScreen />
              </Route>
            </Switch>
          </DeliveryProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
