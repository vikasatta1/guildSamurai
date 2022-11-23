import React, {ChangeEvent, useState} from 'react';

const InputComponent = () => {
    let [title, setTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }
    return (
        <>
            <input
                value={title}
                onChange={onChangeHandler}
                placeholder={'search'}/>

        </>
    );
};

export default InputComponent;