import Image from 'next/image'
import './header.scss'

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Olá, eu sou o Gabriel</h1>
                <h2>Técnico em Informática</h2>
            </div>
            <Image
                src="/gabriel.jpg"
                alt="Gabriel Dornelles"
                width={200}
                height={200}
                priority
            />
        </div>
    )
}