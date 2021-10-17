

export const updateArrayValueWithoutChangeIndex = (orignalArray, originalValue, newValue) => {
    const index = orignalArray.indexOf(originalValue);
    let message;
    if (index !== -1) {
        orignalArray.splice(index, 1, newValue);
        message = `Book ${originalValue} updated with ${newValue} successfully`;
    } else {
        message = `Book ${originalValue} doesnot exists`;
    }
    return message;
};



export const deleteArrayValueIfExist = (orignalArray, deleteValue) => {
    let message;
    const index = orignalArray.indexOf(deleteValue);
    if (index !== -1) {
        orignalArray.splice(index, 1);
        message = `Book ${deleteValue} deleted successfully`;
    }
    else {
        message = `Book ${deleteValue} doesnot exists`;
    }
    return message;
};
