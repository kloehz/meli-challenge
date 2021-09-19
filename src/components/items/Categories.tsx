interface ICategories {
    categories: string[]
}

export const Categories = ({categories}: ICategories) => {
    return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    return (
                        <h5
                            key={category}
                            className="category"
                        >
                            {category}
                        </h5>
                    )
                })
            }
        </div>
    )
}
