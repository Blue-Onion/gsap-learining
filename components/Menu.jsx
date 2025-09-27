"use client";
import { allCocktails } from '@/Data/navLinks'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const Menu = () => {
    const [curr, setcurr] = useState(0)
    const totalCocktails = allCocktails.length;
    const contentRef = useRef();
    const goToSlide = (i) => {
        const newi = (i + totalCocktails) % totalCocktails;
        setcurr(newi);
    }
    const getCurrCocktail = (indexOffSet) => {
        return allCocktails[(curr + indexOffSet + totalCocktails) % totalCocktails];
    }
    useGSAP(() => {
        gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, ease: "power1.inOut", duration: 1 });
        gsap.fromTo(".details", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, ease: "power1.inOut", duration: 1 });
    }, [curr])
    const currCocktail = getCurrCocktail(0);
    const prevCocktail = getCurrCocktail(-1);
    const nextCocktail = getCurrCocktail(1);
    return (
        <section id='menu' aria-labelledby='meu-heading'>
            <img src='/images/slider-left-leaf.png/' id='m-left-leaf' alt='left-leaf' />
            <img src='/images/slider-right-leaf.png/' id='m-right-leaf' alt='right-leaf' />
            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
            <nav aria-label='Cocktail Navigation' className="cocktail-tabs">
                {allCocktails.map((cocktail, i) => {
                    const isActive = i === curr;
                    return <button className={isActive ? "text-white border-white" : "text-white/50 border-white/50"}
                        onClick={() => goToSlide(i)} key={cocktail.id}>{cocktail.name}</button>
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button className='text-left' onClick={() => goToSlide(curr - 1)}>
                        <span className="">
                            {prevCocktail.name}
                            <img src='/images/right-arrow.png' alt='arrow-left' />
                        </span>
                    </button>
                    <button className='text-right' onClick={() => goToSlide(curr + 1)}>
                        <span className="">
                            {nextCocktail.name}
                            <img src='/images/left-arrow.png' alt='arrow-right' />
                        </span>
                    </button>
                </div>
                <div className="cocktail">
                    <img src={`${currCocktail.image}`} className='object-contain' />
                </div>
                <div className="recipe">
                    <div className="info" ref={contentRef}>
                        <p className="">
                            Recipe For
                        </p>
                        <p id="title">
                            {currCocktail.name}
                        </p>
                    </div>
                    <div className="details">
                        <h2 className="">
                            {currCocktail.title}
                        </h2>
                        <p className="">
                            {currCocktail.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu