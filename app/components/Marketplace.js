import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from '../styles/Marketplace.module.css';

export default function Marketplace() {
    const [user, setUser] = useState(null);
    return (
        <div className={styles.marketcontainer}>
                <h3>Marketplace</h3>

                <Card title="Parfum" desc="Eau de toilette"
                price="80" Image="https://img.myloview.fr/posters/bouteille-de-parfum-dessin-d-encre-et-aquarelle-8-400-74340408.jpg"/>

                <Card title="Parfum" desc="Eau de parfum "
                price="69" Image="https://img.myloview.fr/posters/bouteille-de-parfum-dessin-d-encre-et-aquarelle-9-400-74244800.jpg"/>

                <Card title="Parfum" desc="Eau de parfum"
                price="74" Image="https://img.myloview.fr/posters/bouteille-de-parfum-encre-aquarelle-croquis-6-isole-blanc-fond-400-75494765.jpg"/>

                <Card title="Parfum" desc="Eau de toilette"
                price="85" Image="https://img.myloview.fr/papiers-peints/bouteille-de-parfum-et-fleurs-400-98971252.jpg"/>
        </div>
    )
}
