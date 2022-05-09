
export function FaqArea (){
    return(
        <div className="container columns is-fluid is-flex is-flex-direction-column is-hidden-mobile is-hidden-tablet-only" style={{backgroundColor: '#E8F4F0', height: '100vh', margin: '0'}}>
            <h2 className="column is-full has-text-centered has-text-weight-bold is-size-3" style={{color: '#2B3742'}}>Dúvidas Frequentes</h2>
            <div className="is-flex " style={{height: '100%'}}>
                <div className="contentImage column is-half" style={{
                    backgroundImage: "url('./src/assets/images/other-bg-questions.png')",
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '70%'
                    
                }}>
                
                </div>
                <div className="contentImage column" style={{
                    backgroundImage: "url('./src/assets/images/bg-questions.png')",
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%'
                }}>
                </div>
            </div>
        </div>
    )
}