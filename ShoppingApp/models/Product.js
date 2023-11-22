class Product {
    constructor(id,
                catId,
                title, 
                price,
                quantity,
                description) {
        this.id = id;
        this.catId = catId;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

export default Product;