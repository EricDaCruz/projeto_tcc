
import {HeaderHome} from '../../components/HomeComponents/HeaderHome'
import {AreaLogin} from '../../components/HomeComponents/AreaLogin'
import {AreaInfoHome} from '../../components/HomeComponents/AreaInfoHome';
import { FaqArea } from '../../components/HomeComponents/FaqArea';


export function Home (){
    return(
        <>
            <div className="container is-widescreen">
                <HeaderHome />
                <AreaLogin />
            </div>
            <hr style={{height: '3px', backgroundColor: '#12694C'}}/>
            <div className="container is-fluid">
                <AreaInfoHome />
            </div>
            <FaqArea />
        </>
    )

}
