import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProductShow from "./components/ProductShow";
import LandingPage from "./components/LandingPage";
import CreateProductForm from "./components/CreateProductForm";
import AddReviewForm from "./components/AddReviewForm";
import EditReviewForm from "./components/EditReviewForm";
import AccountPage from "./components/AccountPage";
import ProfilePage from "./components/ProfilePage";
import AddProductImage from "./components/AddProductImage";
import MyInventoryPage from "./components/MyInventoryPage";
import EditProductForm from "./components/EditProductForm";
import DescriptionsTab from "./components/DescriptionsTab";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/products/new">
            <CreateProductForm />
          </Route>
          <Route path="/products/:productId/reviews/new">
            <AddReviewForm />
          </Route>
          <Route path="/products/:productId/descriptions">
            <DescriptionsTab />
          </Route>
          <Route path="/products/:productId/edit">
            <EditProductForm />
          </Route>
          <Route path="/products/:productId/images">
            <AddProductImage />
          </Route>
          <Route path="/products/:productId">
            <ProductShow />
          </Route>
          <Route path="/reviews/:reviewId/edit">
            <EditReviewForm />
          </Route>
          <Route path="/profile/:userId">
            <ProfilePage />
          </Route>
          <Route path="/my/profile">
            <AccountPage />
          </Route>
          <Route path="/inventory">
            <MyInventoryPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
