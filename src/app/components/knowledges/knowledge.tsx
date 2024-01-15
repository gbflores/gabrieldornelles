import './knowledges.scss'

export function Knowledges() {
    return (
        <div className="tags">
            <div className="dev">
                <span>Infraestrutura</span>
                <span>Redes de Computadores</span>
                <span>Redes sem fio</span>
                <span>Hardware</span>
                <span>Software</span>
            </div>
            <div className="front">
                <span>Windows</span>
                <span>Linux</span>
                <span>MacOS</span>
            </div>
            <div className="database">
                <span>MySql</span>
                <span>Transact-SQL</span>
                <span>PostgreSQL</span>
            </div>
            <div className="design">
                <span>Suporte Técnico</span>
                <span>Atendimento ao Cliente</span>
            </div>
        </div>
    )
}