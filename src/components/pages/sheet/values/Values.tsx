import './Value.sass'
import { useEffect, useState } from "react";
import { Currency, Value, defaultCurrency } from "../../../../types/common.types";

interface ValuesProps {
    values: Value[]
}

const Values: React.FC<ValuesProps> = ({values}) => {
    const groupedValuesMap = new Map<Currency, number>();
    const [groupedValues, setGroupedValues] = useState<Value[]>([]);
    values.forEach((value) => {
        const { currency, amount } = value;
        if (groupedValuesMap.has(currency)) {
          groupedValuesMap.set(currency, groupedValuesMap.get(currency)! + amount);
        } else {
          groupedValuesMap.set(currency, amount);
        }
      });

    useEffect(() => {
      const newGroupedValues = Array.from(groupedValuesMap).map(
        ([currency, amount]) => ({ currency, amount })
      );
  
      setGroupedValues(newGroupedValues);
    }, []);

    return <div className="justify-center">
        {
            groupedValues.length !== 0 &&
            groupedValues.map((value, index) => (
                <div className="value" key={index}>
                    <div className="text">{value.amount + ' ' + value.currency}</div>
                </div>
            ))
        }
        {
            groupedValues.length === 0 &&
            <div className="value">
              <div className="text">0 {defaultCurrency}</div>
            </div>
        }
        
    </div>
}

export default Values;