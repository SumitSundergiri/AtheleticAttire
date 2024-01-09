package in.project.AthleticAttire.service;

import in.project.AthleticAttire.Model.Product;

import java.util.List;

public interface ProductService {
    String addNewProduct(Product product, int sellerId);
    List<Product> getAllProduct();
    List<Product> getAllProductBySeller( int sellerId);
    String deleteProduct(int productId, int sellerId);
    Product getProductById(int productId, int sellerId);
    String updateProduct(int productId, int sellerId, Product product);
    String updatePrice(int productId, int sellerId, double price);
}
