import { 
    BrowserRouter, 
    Routes,
    Route 
} from "react-router-dom";

/* Pages */
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { Forum } from "./pages/Forum";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/forum" exact element={<Forum />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;