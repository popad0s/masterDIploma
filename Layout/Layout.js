import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {useHistory} from "react-router";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import ChooseCampus from '../AddCampus/ChooseCampus';
import AddCampus from '../AddCampus/AddCampus';
import Error from '../../pages/error/Error';
import EditUsers from '../../pages/editUsers/EditUsersPanel.js';

// context
import { useLayoutState } from "../../context/LayoutContext";
import Temperatures from "../../pages/temperatures/Temperatures";
import Counters from "../../pages/counters/Counters";
import predictionalModelCampuses from "../../predictions/models/predictionalModelCampuses";
import predictionalModelHeating from "../../predictions/models/predictionalModelHeating";
import ShowCampusData from "../ShowData/ShowCampusData";
import CampusDataPage from "../ShowData/CampusDataPage";
import WeatherPage from "../../pages/weather/WeatherPage";


function Layout(props) {
  let classes = useStyles();

  // global
  let layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/tables" component={Tables} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/predictionsCampuses" component={predictionalModelCampuses} />
              <Route path="/app/ui/predictionsHeating" component={predictionalModelHeating} />
              <Route path="/app/ui/choosecampus" component={ChooseCampus} />
              <Route path="/app/ui/charts" component={Charts} />
              <Route path="/app/ui/temperatures" component={Temperatures} />
              <Route path="/app/ui/counters" component={Counters} />
              <Route path="/app/ui/addcampus" component={AddCampus} />
              <Route path="/app/ui/editusers" component={EditUsers} />
              <Route path="/app/ui/weather" component={WeatherPage} />
              {/*  */}
              <Route exact path="/app/ui/showCampusData" component={ShowCampusData} />
              <Route exact path="/app/ui/showCampusData/:id" component={CampusDataPage} />
              {/*  */}
              <Redirect path="/error" component={Error} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
