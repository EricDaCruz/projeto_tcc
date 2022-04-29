import HeaderHome from '../../components/HeaderHome'
import AreaLogin from '../../components/AreaLogin'
import AreaInfoHome from '../../components/AreaInfoHome';

const Home = () => {
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
        </>
    )

}

export default Home;