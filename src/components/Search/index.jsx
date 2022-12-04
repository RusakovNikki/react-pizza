import React from "react"
import { useRef, useContext } from "react"
import debounce from "lodash.debounce"

import { MyContext } from "../../App"
import s from "./Search.module.scss"
import { useCallback } from "react"
import { useState } from "react"

const Search = () => {
    const [value, setValue] = useState("")
    const { setInputText } = useContext(MyContext)
    const ref = useRef(null)

    const updateSearchValue = useCallback(
        debounce((str) => {
            setInputText(str)
        }, 500),
        []
    )

    const onChangeInput = (e) => {
        setValue("")
        setInputText("")
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
                        <line class="cls-1" x1="7" x2="25" y1="7" y2="25" />
                        <line class="cls-1" x1="7" x2="25" y1="25" y2="7" />
                    </g>
                </svg>
            )}
        </div>
    )
}

export default Search
