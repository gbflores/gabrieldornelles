import { IconAccess } from '../icons/access'
import { IconBrazil } from '../icons/brazil'
import { IconEua } from '../icons/eua'
import { SectionTitleProps } from '../sectionTitle/section-title'
import './info.scss'

export function Infos() {
    return (
        <div className="infos">
            {/* <SectionTitleProps text="Línguas" />
            <div className="languages">
                <span><IconBrazil width="30" height="30" /> Nativo</span>
                <span><IconEua width="30" height="30" /> Intermediário</span>
            </div> */}
            <SectionTitleProps text="Trabalho Atual" />
            <div className="educational">
                <span>Atualmente trabalhando na Maxxi Econômica como Analista de Suporte e de Infraestrutura. Logo mais serei Gerente de TI. Realizo suporte para mais de 130 lojas, construo servidores para cada loja nova, faço migrações, atualizações em sistema, backups, estrutura de redes, cabeamentos, seguranças internas e externas, firewall, formatações, entre outras coisas...</span>
            </div>
            {/* <a className="btn-primary" href="https://maxxieconomica.com" target="_blank">
                Acessar site!
                <IconAccess width="24" height="24" color="white" />
            </a> */}
        </div>
    )
}
