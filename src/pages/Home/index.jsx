
import {HeaderHome} from '../../components/HomeComponents/HeaderHome'
import {AreaLogin} from '../../components/HomeComponents/AreaLogin'
import {AreaInfoHome} from '../../components/HomeComponents/AreaInfoHome';
import { FaqArea } from '../../components/HomeComponents/FaqArea';
import { RatingArea } from '../../components/HomeComponents/RatingArea';
import { WriteUsArea } from '../../components/HomeComponents/WriteUsArea';
import { FooterArea } from '../../components/HomeComponents/FooterArea';



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
            <RatingArea />
            <WriteUsArea />
            <FooterArea />
        </>
    )

}
