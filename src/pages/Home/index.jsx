import {HeaderHome} from '../../components/HeaderHome'
import {AreaLogin} from '../../components/AreaLogin'
import {AreaInfoHome} from '../../components/AreaInfoHome';

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
            <div className="container is-fluid" style={{backgroundColor: '#E8F4F0', height: '95vh'}}>
               
            </div>
        </>
    )

}
