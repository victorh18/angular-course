function getPropertyAsString<T extends object>(obj: T, selector: (x: Record<keyof T, keyof T>) => keyof T) {
    let propertiesObject = {} as Record<keyof T, keyof T>;

    const keyList = Object.keys(obj).reduce((result, currentKey) => {
        const key = currentKey as keyof T;
        result[key] = key;
        return result
    }, propertiesObject)

    return selector(keyList);
}

function genericSort<T extends object>(objectProperty: string, descSorting: boolean) { 
    return (firstValue: T, secondValue: T) => {
        let tempObject: T;

        // If the order is descending, flip the objects to invert the comparison
        if (descSorting) {
            tempObject = firstValue;
            firstValue = secondValue;
            secondValue = tempObject;
        }

        if (firstValue[objectProperty] > secondValue[objectProperty]) {
            return 1;
        } else if (secondValue[objectProperty] === firstValue[objectProperty]) {
            return 0;
        }
        
        return -1;

    }
}

export {
    getPropertyAsString,
    genericSort
}