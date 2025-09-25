"use client"
import { navLinks } from "@/Data/navLinks"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    useGSAP(() => {
        const navTeen = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "botttom top"
            }
        });
        navTeen.fromTo("nav", {backgroundColor: "transparent"}, 
            {
                backgroundColor: "#00000050",
                backgroundFilter: "blur(10px)",
                ease: "power1.inOut",
                duration:1
                
            })
    }
, [])
    return (
        <nav>
            <div className="mx-auto container flex justify-between items-center">
                <Link className="flex justify-between items-center gap-2" href={"#home"}>
                    <Image src="/images/logo.png" width={40} height={40} alt="logo" />
                    <h2 className="text-2xl font-bold">
                         Pour Tail
                    </h2>
                </Link>
                <ul className="flex gap-3 items-center">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={`#${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar