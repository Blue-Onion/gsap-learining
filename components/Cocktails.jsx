import { cocktailLists, mockTailLists } from '@/Data/navLinks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const Cocktails = () => {
    useGSAP(()=>{
const parallaxTimeline=gsap.timeline({
    scrollTrigger:{
        trigger:"#cocktails",
        start:"top 30%",
        end:"bottom 80%",
        scrub:true,
    }
}).from("#c-left-leaf",{y:100,x:-100}).
from("#c-right-leaf",{y:100,x:100});
    }
    ,[]);
    return (
        <section id="cocktails" className="noisy">
            <img src='/images/cocktail-left-leaf.png' alt='l-leaf' id='c-left-leaf' />
            <img src='/images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf' />
            <div className="list">
                <div className="popular">
                    <h2 className="">Most Popular cocktail: </h2>
                    <ul>
                        {cocktailLists.map((drink) => {
                           return <li key={drink.name}>
                                <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p className="">
                                    {drink.country}|{drink.detail}
                                </p>
                                </div>
                                <span>
                                    -{drink.price}
                                </span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="loved">
                    <h2 className="">Most Popular cocktail: </h2>
                    <ul>
                        {mockTailLists.map((drink) => {
                           return <li key={drink.name}>
                                <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p className="">
                                    {drink.country}|{drink.detail}
                                </p>
                                </div>
                                <span>
                                    -{drink.price}
                                </span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </section>          
    )
}

export default Cocktails