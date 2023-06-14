import { SectionTitleProps } from '../sectionTitle/section-title'
import './experience.scss'

export function Experiences() {
    return (
        <div className="experiences">
            <SectionTitleProps text="Experience" />
            <p>Desenvolvedor Full Stack Sênior apaixonado por criar soluções web. Com mais de 10 anos de experiência, tenho um histórico comprovado no desenvolvimento de sistemas escaláveis e no gerenciamento de projetos complexos.</p>
            {/* <p>Senior Full Stack developer passionate about creating web solutions. With over 10 years of experience, I have a proven track record in developing scalable systems and managing complex projects.</p> */}
            <div className="experience-time">

            </div>
        </div>
    )
}