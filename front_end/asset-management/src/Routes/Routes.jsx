import React from "react";
import { Route, Switch } from "react-router-dom";
import MainListing from "../Components/MainListing/MainListing";
import SingleImage from "../Components/SingleImage/SingleImage";


function Routes()
{
    return(
        <>
            <Switch>
                <Route exact path="/" render={() => <MainListing/> } />
                <Route path="/image/:id" render={() => <SingleImage/> } />
            </Switch>
        </>
    )
}

export default Routes