import { SectionTitleProps } from '../sectionTitle/section-title'
import './info.scss'

export function Infos() {
    return (
        <div className="infos">
            <SectionTitleProps text="Languages" />
            <div className="languages">
                <span> BR - Native</span>
                <span>EN - Intermediate</span>
            </div>
            <div className="educational">
                <span></span>
                <span>texto educação</span>
            </div>
        </div>
    )
}
