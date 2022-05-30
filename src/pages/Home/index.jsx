
import { HeaderArea } from '../../components/HomeComponents/HeaderArea'
import { LoginArea } from '../../components/HomeComponents/LoginArea'
import { InfoArea } from '../../components/HomeComponents/InfoArea';
import { FaqArea } from '../../components/HomeComponents/FaqArea';
import { RatingArea } from '../../components/HomeComponents/RatingArea';
import { WriteUsArea } from '../../components/HomeComponents/WriteUsArea';
import { FooterArea } from '../../components/HomeComponents/FooterArea';



export function Home (){
    return(
        <>
            <div className="container is-widescreen">
                <HeaderArea />
                <LoginArea />
            </div>
            <hr style={{height: '3px', backgroundColor: '#12694C'}}/>

            <InfoArea />
            <FaqArea />
            <RatingArea />
            <WriteUsArea />
            <FooterArea />
        </>
    )

}
