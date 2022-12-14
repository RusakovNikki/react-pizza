import { useDispatch, useSelector } from "react-redux"
import React, { useRef, useCallback, useState } from "react"
import debounce from "lodash.debounce"

import s from "./Search.module.scss"
import { setSearchText } from "../../redux/slices/filterSlice"

const Search = () => {
    const [value, setValue] = useState("")
    const { searchText } = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const ref = useRef(null)

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchText(str))
        }, 500),
        []
    )

    const onChangeInput = (e) => {
        setValue("")
        dispatch(setSearchText(""))
        ref.current.focus()
    }
    return (
        <div className={s.search_container}>
            <svg
                className={s.icon}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="search">
                    <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                </g>
            </svg>
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                    updateSearchValue(event.target.value)
                }}
                type="text"
                className={s.input}
                placeholder="Поиск пицц..."
                ref={ref}
            />

            {value && (
                <svg
                    onClick={onChangeInput}
                    className={s.delText}
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="cross">
                        <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
                        <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
                    </g>
                </svg>
            )}
        </div>
    )
}

export default Search
