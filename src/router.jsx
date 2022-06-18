import { 
    BrowserRouter, 
    Routes,
    Route 
} from "react-router-dom";

/* Pages */
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { Forum } from "./pages/Forum";
import { SingUp } from "./pages/SingUp";

/* Forms Pages */
import { FormStep1 } from './components/SingUp/FormStep1'
import { FormStep2 } from './components/SingUp/FormStep2'
import { FormStep3 } from './components/SingUp/FormStep3'
import { FormStep4 } from './components/SingUp/FormStep4'
import { FormStep5 } from "./components/SingUp/FormStep5";
import { FormStep6 } from "./components/SingUp/FormStep6";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/forum" exact element={<Forum />} />
                <Route path="/sing-up/step1" element={<SingUp > <FormStep1 /> </SingUp>} />
                <Route path="/sing-up/step2" element={<SingUp > <FormStep2 /> </SingUp>} />
                <Route path="/sing-up/step3" element={<SingUp > <FormStep3 /> </SingUp>} />
                <Route path="/sing-up/step4" element={<SingUp > <FormStep4 /> </SingUp>} />
                <Route path="/sing-up/step5" element={<SingUp > <FormStep5 /> </SingUp>} />
                <Route path="/sing-up/step6" element={<SingUp > <FormStep6 /> </SingUp>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;