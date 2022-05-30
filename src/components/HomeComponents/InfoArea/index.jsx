import Img from '../../../assets/images/img-example-area-info.png'


export function InfoArea() {
    return (
        <section className="container is-widescreen">
            <div className="columns is-align-items-center" style={{ minHeight: '60vh', maxHeight: '80vh' }}>
                <div className="column is-half" style={{color:'#020202'}}>
                    <h2 className="is-size-3 is-size-4-mobile mb-3">PERGUNTAS E RESPOSTAS</h2>
                    <p className="is-size-5 is-size-6-mobile">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,</p>
                </div>
                <div className="column is-hidden-mobile has-text-center-touch">
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className="columns is-align-items-center is-flex-direction-row-reverse" style={{ minHeight: '60vh', maxHeight: '80vh' }}>
                <div className="column is-half" style={{color:'#020202'}}>
                    <h2 className="is-size-3 is-size-4-mobile mb-3">INTERAÇÃO</h2>
                    <p className="is-size-5 is-size-6-mobile">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,</p>
                </div>
                <div className="column is-hidden-mobile has-text-center-touch">
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className="columns is-align-items-center" style={{ minHeight: '60vh', maxHeight: '80vh' }}>
                <div className="column is-half" style={{color:'#020202'}}>
                    <h2 className="is-size-3 is-sizmobile mb-3">AVALIAÇÃO E RANKING</h2>
                    <p className="is-size-5 is-size-6-mobile">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,</p>
                </div>
                <div className="column is-hidden-mobile has-text-center-touch">
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className="columns is-align-items-center is-flex-direction-row-reverse" style={{ minHeight: '60vh', maxHeight: '80vh' }}>
                <div className="column is-half" style={{color:'#020202'}}>
                    <h2 className="is-size-3 is-size-4-mobile mb-3">AVISOS</h2>
                    <p className="is-size-5 is-size-6-mobile">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,

                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,</p>
                </div>
                <div className="column is-hidden-mobile  has-text-center-touch">
                    <img src={Img} alt="" />
                </div>
            </div>

        </section>
    )

};

