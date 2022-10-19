import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/common/container";
import NavBar from "./components/ui/NavBar";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QualitiesProvider } from "./hooks/useQualities";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
    });
};

function App() {
    return (
        <div className='App'>
            <NavBar routes={routes} />
            <QualitiesProvider>
                <Container>
                    <Switch>
                        {getRoutes(routes)}
                        <Redirect to='/' />
                    </Switch>
                </Container>
            </QualitiesProvider>
            <ToastContainer />
        </div>
    );
}

export default App;

// ======================================================================================================================================================================================================

// import React, { useContext } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import Container from "./components/common/container";
// import NavBar from "./components/ui/NavBar";
// import routes from "./routes";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const getRoutes = (routes) => {
//     return routes.map((prop, key) => {
//         return <Route path={prop.path} component={prop.component} key={key} />;
//     });
// };

// const QualitiesContext = React.createContext();

// export const useQualities = () => {
//     return useContext(QualitiesContext);
// };

// const qualities = [{ _id: 123132, name: "asdasd" }];

// function App() {
//     return (
//         <div className='App'>
//             <NavBar routes={routes} />
//             <QualitiesContext.Provider value={qualities}>
//                 <Container>
//                     <Switch>
//                         {getRoutes(routes)}
//                         <Redirect to='/' />
//                     </Switch>
//                 </Container>
//             </QualitiesContext.Provider>
//             <ToastContainer />
//         </div>
//     );
// }

// export default App;
