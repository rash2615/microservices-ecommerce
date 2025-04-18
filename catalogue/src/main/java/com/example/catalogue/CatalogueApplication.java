package com.example.catalogue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@SpringBootApplication
@RestController
@RequestMapping("/products")
public class CatalogueApplication {

    private Map<Long, Product> products = new HashMap<>();

    public static void main(String[] args) {
        SpringApplication.run(CatalogueApplication.class, args);
    }

    @GetMapping
    public Collection<Product> getProducts() {
        return products.values();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return products.get(id);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        products.put(product.getId(), product);
        return product;
    }
}
