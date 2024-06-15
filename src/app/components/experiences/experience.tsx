import { SectionTitleProps } from '../sectionTitle/section-title'
import { Knowledges } from '../knowledges/knowledge'
import './experience.scss'

export function Experiences() {
    return (
        <div className="experiences">
            <SectionTitleProps text="Sobre" />
            <p>Olá meu nome é Gabriel Dornelles, tenho 24 anos, estou trabalhando na área de T.I a mais de 7 anos, tenho histórico comprovado na atuação Suporte tecnico e externo, montagem e expansão de loja, manutenção de rede, Hardware e Softwares, de 2 grandes rede de farmacias no RS.</p>
            <SectionTitleProps text="Conhecimentos" />
            <div className="knowledges">
                <Knowledges />
            </div>
        </div>
    )
}
