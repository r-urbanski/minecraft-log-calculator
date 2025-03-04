import { useEffect, useState } from 'react'
import { ListItems, ListProps, CalculatorItems } from '../../assets/utils/interfaces'

const WoodList: React.FC<ListProps> = ({ selectedList, setSelectedList, setCalculatorList }) => {
    const [tempList, setTempList] = useState<ListItems[]>([])

    const reduceList = (name: string, originalList: ListItems[]) => {
        const changedList = originalList.map(item => {
            if (name === item.name) {
                let changedItem = { ...item, selected: !item.selected }

                if (!item.selected === true) {
                    setTempList(prev => [...prev, changedItem])
                } else {
                    setTempList(prev => prev.filter(item => item.name != name))
                }

                return changedItem
            }

            return item
        })

        setSelectedList(changedList)
    }

    useEffect(() => {
        const reducedList = prepareCalculatorList(tempList)
        setCalculatorList(reducedList)
    }, [tempList])

    const functionName = (name: string) => {
        const newName = name.toLowerCase()
        return newName.replace(' ', '_')
    }

    const prepareCalculatorList = (changedList: ListItems[]) => {
        const filteredList = changedList.filter(item => item.selected === true)
        const reducedList = filteredList.map(({ selected, name, ...rest }) => {
            return { ...rest, name, counter: 0, functionName: functionName(name) }
        })

        return reducedList
    }

    return (
        <aside className='items-list'>
            {selectedList.map(({ selected, name, image }, index) => (
                <button type='button' key={index} className={`item ${selected ? 'selected' : ''}`} onClick={() => reduceList(name, selectedList)}>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </button>
            ))}
        </aside>
    )
}

export default WoodList
