interface IDesc {
    description: string
}

export const ItemDetailDescription = ({description}: IDesc) => {
    return (
        <div className="item-detail-description-container">
            <span className="desc-title">
                Descripcion del producto
            </span>
            <span className="desc-info">
                {description}
            </span>
        </div>
    )
}
