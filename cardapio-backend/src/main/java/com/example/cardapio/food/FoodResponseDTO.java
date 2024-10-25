package com.example.cardapio.food;

public record FoodResponseDTO(long id, String title, String image, int price) {
    public FoodResponseDTO(Food food){
        this(food.getId(), food.getTittle(), food.getImage(), food.getPrice());
    }

}
