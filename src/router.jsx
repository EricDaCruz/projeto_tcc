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
import { Chats } from "./components/Forum/Chats";
import { MakeQuestions } from "./components/Forum/MakeQuestions";
import { Subjects } from "./components/Subjects";
import { Subject } from "./components/Subjects/Subject";
import { SubjectsTec } from "./components/Subjects/SubjectsTec";
import { FavoriteQuestions } from "./components/Forum/FavoriteQuestions";
import { MyQuestions } from "./components/Forum/MyQuestions";
import { MyAnswer } from "./components/Forum/MyAnswer";
import { QuestionWithComments } from "./components/Forum/QuestionWithComments";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/sing-up" element={ <SingUp /> } >
                    <Route path="step1" element={ <FormStep1 /> } />
                    <Route path="step2" element={ <FormStep2 /> } />
                    <Route path="step3" element={ <FormStep3 /> } />
                    <Route path="step4" element={ <FormStep4 /> } />
                    <Route path="step5" element={ <FormStep5 /> } />
                    <Route path="step6" element={ <FormStep6 /> } />
                </Route>
                <Route path="/forum" element={<Forum />} >
                    <Route path="chats" element={<Chats />} />
                    <Route path="make-questions" element={<MakeQuestions />} />
                    <Route path="favorite-questions" element={<FavoriteQuestions />} />
                    <Route path="my-questions" element={<MyQuestions />} />
                    <Route path="my-answer" element={<MyAnswer />} />
                    <Route path="question/:questionUid" element={<QuestionWithComments />} />
                    {/* Disciplinas */}
                    <Route path="subjects" element={<Subjects />} /> 
                    <Route path='subjects/:category' element={<Subject />}/>
                    <Route path='subjects/ds' element={<SubjectsTec />}/>
                    <Route path='subjects/ds/:category' element={<Subject />}/>
                    <Route path='subjects/tma' element={<SubjectsTec />}/>
                    <Route path='subjects/tma/:category' element={<Subject />}/>
                    <Route path='subjects/tdi' element={<SubjectsTec />}/>
                    <Route path='subjects/tdi/:category' element={<Subject />}/>
                </Route> 
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;