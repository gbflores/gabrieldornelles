import { IconAccess } from '../icons/access'
import { IconBrazil } from '../icons/brazil'
import { IconEua } from '../icons/eua'
import { SectionTitleProps } from '../sectionTitle/section-title'
import './info.scss'

export function Infos() {
    return (
        <div className="infos">
            <SectionTitleProps text="Línguas" />
            <div className="languages">
                <span><IconBrazil width="30" height="30" /> Nativo</span>
                <span><IconEua width="30" height="30" /> Intermediário</span>
            </div>
            <SectionTitleProps text="Trabalho Atual" />
            <div className="educational">
                <span>Desenvolvimento do 0 do ecommerce da Maxxi Econômica Farmácias, integrando todo o sistema interno com as 140 lojas e consulta de estoque online, montando o desenvolvimento para ser o melhor para o cliente e distribuição rápida para o pdv das lojas.
                    Criação de plataforma digital com automatização de diversas ferramentas internas para otimização de tempo e melhoria de captação de vendas para cada loja, com automatização de imagens padrões, impressões, utilização de campanhas, e com o projeto ainda em andamento e crescendo.</span>
            </div>
            <a className="btn-primary" href="https://maxxieconomica.com" target="_blank">
                Acessar site!
                <IconAccess width="24" height="24" color="white" />
            </a>
        </div>
    )
}
