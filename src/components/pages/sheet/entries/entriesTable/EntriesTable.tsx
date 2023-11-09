import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { CategorizedEntries } from "../../../../../types/entries.types";
import CategoriesSection from "../categoriesSection/CategorySection";
import './EntriesTable.sass'

interface EntriesTableProps {
    entries: any[]
}

const EntriesTable: React.FC<EntriesTableProps> = ({entries}) => {

    const categorizedEntries: CategorizedEntries = entries.reduce((result, entry) => {
        if (!result[entry.category]) {
          result[entry.category] = [];
        }
        result[entry.category].push(entry);
        return result;
      }, {});

    return <div className="table">
      <div className="container header">
        <div className="column is-5">
          <div className="button">
            <FontAwesomeIcon
              className="icon"
              icon={icon({ name: 'plus' })}
            />
          <span className="subtitle">Add Category</span>
          </div>
        </div>
      <div className="column is-3 justify-center">
        <span className="subtitle">Expected</span>
      </div>
      <div className="column is-3 justify-center">
        <span className="subtitle">Spent so far</span>
      </div>
      <div className="column is-1"></div>
      </div>
        {Object.entries(categorizedEntries).map(([category, entries]) => (
            <CategoriesSection key={category} category={category} entries={entries}></CategoriesSection>
      ))}
    </div>
}

export default EntriesTable;