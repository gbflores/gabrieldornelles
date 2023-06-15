import './knowledges.scss'

export function Knowledges() {
    return (
        <div className="tags">
            <div className="dev">
                <span>PHP</span>
                <span>Laravel</span>
                <span>Javascript</span>
                <span>React</span>
                <span>Next</span>
            </div>
            <div className="front">
                <span>Html</span>
                <span>Css</span>
                <span>Bootstrap</span>
                <span>Tailwind</span>
            </div>
            <div className="database">
                <span>MySql</span>
                <span>Postgre</span>
                <span>Firebird</span>
            </div>
            <div className="design">
                <span>Photoshop</span>
                <span>Illustrator</span>
            </div>
        </div>
    )
}