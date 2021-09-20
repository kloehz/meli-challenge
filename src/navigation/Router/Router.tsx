import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { ItemDetail } from "../../views/ItemDetail";
import { Items } from "../../views/Items";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/items" component={Items} />
                <Route path="/items/:id" component={ItemDetail} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;