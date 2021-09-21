import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Home } from "../../views/Home";
import { ItemDetail } from "../../views/ItemDetail";
import { Items } from "../../views/Items";
import { NotFound } from "../../views/NotFound";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/items" component={Items} />
                <Route exact path="/items/:id" component={ItemDetail} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;