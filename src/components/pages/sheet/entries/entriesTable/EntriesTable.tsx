import { CategorizedEntries } from "../../../../../types/entries.types";
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

    return <div>
        {Object.entries(categorizedEntries).map(([category, entries]) => (
            <div key={category}>
            <h2>{category}</h2>
            <div>
                {entries.map((entry) => (
                <div key={entry.id}>{entry.subcategory}</div>
                ))}
            </div>
            </div>
      ))}
    </div>
}

export default EntriesTable;