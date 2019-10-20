import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './../images/404Error.jpg';
class NotFoundPage extends React.Component {
    render() {
        return <div >
            <div style={{ display: 'flex' }}>
                <img src={PageNotFound} style={{ height: '100%', width: '800px', margin: 'auto' }} alt='not found'/>
            </div>
            <div>
                <p style={{ textAlign: "center", fontSize: '1.5em' }}>
                    <Link to="/">Aller à la page d'accueil.</Link>
                </p>
            </div>

        </div>

    }
}
export default NotFoundPage;