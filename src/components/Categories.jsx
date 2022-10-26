import React from 'react'


const Categories = ({ sortByCategory, setSortByCategory }) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((catergory, index) => {
                    return <li
                        className={sortByCategory === index ? 'active' : ''}
                        onClick={() => setSortByCategory(index)}
                        key={index}>{catergory}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories
