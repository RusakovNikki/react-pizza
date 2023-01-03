import { memo } from "react"

type CategoryProps = {
    sortByCategory: number
    setSortByCategory: (idx: number) => void
}

const Categories: React.FC<CategoryProps> = memo(
    ({ sortByCategory, setSortByCategory }) => {
        const categories = [
            "Все",
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
        ]

        console.log("Update Categ")

        return (
            <div className="categories">
                <ul>
                    {categories.map((catergory, index) => {
                        return (
                            <li
                                className={
                                    sortByCategory === index ? "active" : ""
                                }
                                onClick={() => setSortByCategory(index)}
                                key={index}
                            >
                                {catergory}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
)

export default Categories
