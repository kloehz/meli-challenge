import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header";
import { Items } from "../../views/Items";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/items" component={Items} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;