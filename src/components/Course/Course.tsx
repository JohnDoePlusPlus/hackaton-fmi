import * as css from './Course.scss';

export const Course = () => (
    <div>
        <div className={`container-fluid ${css.blueback}`}>
            <div className="container" style={{ color: 'white', }}>
                <div className="row">
                    <div className="col-12">
                        <h2>Javascript pentru incepatori</h2>
                    </div>
                    <div className="col-12">
                        <h4>Ion Spinu <small>Last update 11/2018</small></h4>
                    </div>
                    <div className="col-5 pt-3 mb-3">
                        <p>Programarea inforamtica este o activitate informatica de elaborare a produselor-soft, a programelor software necesare activitatilor realizate cu ajutorul calculatorului.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className={`${css['custom-list']} row`}>
                            <div className="col-6 pb-3">
                                <i className={`fas ${css['fa-check']}`}></i>
                                Go from a total beginner to an advanced Javascript developer
                        </div>
                            <div className="col-6 pb-3">
                                <i className={`fas ${css['fa-check']}`}></i>
                                Go from a total beginner to an advanced Javascript developer
                        </div>
                            <div className="col-6 pb-3">
                                <i className={`fas ${css['fa-check']}`}></i>
                                Go from a total beginner to an advanced Javascript developer
                        </div>
                            <div className="col-6 pb-3">
                                <i className={`fas ${css['fa-check']}`}></i>
                                Go from a total beginner to an advanced Javascript developer
                        </div>
                            <div className="col-6 pb-3">
                                <i className={`fas ${css['fa-check']}`}></i>
                                Go from a total beginner to an advanced Javascript developer
                        </div>
                            <div className="col-6 pb-3">
                                <i className={`fas ${css['fa-check']}`}></i>
                                Go from a total beginner to an advanced Javascript developer
                        </div>
                        </div>
                        <div className="progress m-3 ">
                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }}></div>
                        </div>
                        <h1>Conținul cursului</h1>
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Collapsible Group Item #1
        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Collapsible Group Item #2
        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Collapsible Group Item #3
        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className={`${css['custom-card']} row p-3`}>
                            <div className={`${css['custom-card-video']}`}>
                                <iframe width="100%" height="150" src="https://www.youtube.com/embed/cKhVupvyhKk" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <h4 id="credite" className="p-3">5 Credite</h4>
                            <img src="https://i.stack.imgur.com/LDZ1u.png" alt="" style={{ width: '100%', height: '200px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
);