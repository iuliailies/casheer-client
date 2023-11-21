import './CategorySection.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Entry } from '../../../../../types/entries.types';
import Values from '../../values/Values';

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
                        <Values values={[entry.expected]}></Values>
                    </div>
                    <div className="column is-3 justify-center">
                        {   // TODO: error handling when entry.expenses is null
                            entry.expenses &&
                            <Values values={entry.expenses.map(e => {
                                return e.value
                            })}></Values>
                        }
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