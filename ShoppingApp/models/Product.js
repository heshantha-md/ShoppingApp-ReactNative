class Product {
    constructor(id,
                catId,
                title, 
                price,
                quantity,
                imageUrl,
                description) {
        this.id = id;
        this.catId = catId;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

export default Product;