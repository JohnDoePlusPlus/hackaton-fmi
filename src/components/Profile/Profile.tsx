import * as css from './Profile.scss';

let index = 0;

export const Profile = () => (
    <div className="container-fluid">
        <div className="form">
            <form style={{ width: '50%' }}>
                <div className="form-group">
                    <label >Denumire curs</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Incarca file</label>
                    <input type="file" name="file" />
                </div>
                <div className="form-group">
                    <label >Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                </div>
                <div>
                    <button type="button" className="btn btn-success">Incarca</button>
                </div>
            </form>
        </div>
        <br />
        <br />
        <br />

        <div className="menu">
            <h2>Grupe</h2>
            <button className={css.accordion}>Grupa 1</button>
            <div className={css.panel}>
                <br />
                <ul className="list-group">
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                </ul>
                <br />
            </div>

            <button className={css.accordion}>Grupa 2</button>

            <div className={css.panel}>
                <br />
                <ul className="list-group">
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                </ul>
                <br />
            </div>

            <button className={css.accordion}>Grupa 3</button>

            <div className={css.panel}>
                <br />
                <ul className="list-group">
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                    <li className="list-group-item"><img src="user.png" /> &nbsp; Anastasia Vutcariov</li>
                </ul>
                <br />
            </div>

            <div className="menu1">
                <h2>Cursuri</h2>
                <button className={css.accordion}>JAVA Developing</button>
                <div className={css.panel}>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                    </ul>
                    <br />
                </div>
                <button className={css.accordion}>HTML5 Tutorial</button>
                <div className={css.panel}>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov</li>
                    </ul>
                    <br />
                </div>

                <button className={css.accordion}>Bootstrap Tutorial</button>

                <div className={css.panel}>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov &nbsp; &nbsp; &nbsp; &nbsp; <img src="loader.png" /></li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov &nbsp; &nbsp; &nbsp; &nbsp; <img src="loader.png" /></li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov &nbsp; &nbsp; &nbsp; &nbsp; <img src="loader.png" /></li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov &nbsp; &nbsp; &nbsp; &nbsp; <img src="loader.png" /></li>
                        <li className="list-group-item"><img src="file.png" /> &nbsp; Anastasia Vutcariov &nbsp; &nbsp; &nbsp; &nbsp; <img src="loader.png" /></li>
                    </ul>
                    <br />
                </div>
            </div>
        </div>
        
    </div>)