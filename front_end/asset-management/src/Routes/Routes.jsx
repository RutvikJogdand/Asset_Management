import React from "react";
import { Route, Switch } from "react-router-dom";
import AddImage from "../Components/AddImage/AddImage";
import MainListing from "../Components/MainListing/MainListing";
import SingleImage from "../Components/SingleImage/SingleImage";


function Routes()
{
    return(
        <>
            <Switch>
                <Route exact path="/" render={() => <MainListing/> } />
                <Route path="/image/:id" render={() => <SingleImage/> } />
                <Route path="/add-image" render={() => <AddImage/> } />
            </Switch>
        </>
    )
}

export default Routes