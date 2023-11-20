import './CategorySection.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Entry } from '../../../../../types/entries.types';

interface CategoriesSectionProps {
    category: string;
    entries: Entry[]
}

const CategorySection: React.FC<CategoriesSectionProps> = ({category, entries}) => {

    return <div key={category} className="category-section">
        <div className="category-row">
            <FontAwesomeIcon
                className="icon"
                icon={icon({ name: 'chevron-right' })}
            />
            <div className='subtitle'>{category}</div>
            <FontAwesomeIcon
                className="icon"
                icon={icon({ name: 'plus' })}
            />
        </div>
        <div>
            {entries.map((entry) => (
                <div key={entry.id} className="entry-row container">
                    <div className="column is-5">
                        <FontAwesomeIcon
                            className="icon"
                            icon={icon({ name: 'circle' })}
                        />
                        <div className='text'>{entry.subcategory}</div>
                    </div>
                    <div className="column is-3 justify-center">
                        <div className="text">{entry.expected.amount + ' ' + entry.expected.currency}</div>
                    </div>
                    <div className="column is-3 justify-center">
                    </div>
                    <div className="column is-1 justify-end">
                        <FontAwesomeIcon
                            className="icon"
                            icon={icon({ name: 'angles-right' })}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default CategorySection;