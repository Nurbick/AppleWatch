import React, {useState} from 'react';
import './main.scss'
import Card from "./Card";
import AirPods from '../../assets/main/Airpods.png'
import Iphone from '../../assets/main/Iphone.png'
import AppleTv from '../../assets/main/Apple tv.png'
import AppleCard from '../../assets/main/Apple card.png'

const Main = () => {

    const [products,setProducts] = useState([{
        id:1,
        title:'Airpods',
        price:199.00,
        image:AirPods
    }, {
        id:2,
        title:'Iphone',
        price:799.00,
        image:Iphone
    }, {
        id:3,
        title:'AppleTv',
        price:179.00,
        image:AppleTv
    }, {
        id:4,
        title:'AppleCard',
        price:'Free*',
        image:AppleCard
    }, {
        id:5,
        title:'Airpods',
        price:199.00,
        image:AirPods
    }, {
        id:6,
        title:'Iphone',
        price:799.00,
        image:Iphone
    }, {
        id:7,
        title:'AppleTv',
        price:179.00,
        image:AppleTv
    }, {
        id:8,
        title:'AppleCard',
        price:'Free*',
        image:AppleCard
    }]);

    const [all,setAll] = useState('');


    return (
        <main className="main">
            <div className="container">
            <section className="content">

                    <div className="main__header">
                        <h2 className="main__title">Check also</h2>
                    </div>

                <div className="main__cards">

                    {products.filter((item)=>{
                        if (all.length===0){
                            return item.id<5
                        }else{
                            return  item
                        }
                    }).map((item)=>(
                        <Card key={item.id} title={item.title} price={item.price} image={item.image}/>
                    ))}

                </div>
                {
                    all==='' ? <p onClick={()=>setAll('All')} className="main__text">See all</p> : <p onClick={()=>setAll('')} className="main__hide">Hide</p>
                }


            </section>
            </div>
        </main>
    );
};

export default Main;