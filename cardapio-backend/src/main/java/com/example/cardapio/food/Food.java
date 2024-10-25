package com.example.cardapio.food;

import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Table(name = "foods")
@Entity(name = "foods")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String tittle;

    private String image;

    private int price;

    public Food(FoodRequestDTO data){
        this.image = data.image();
        this.price = data.price();
        this.tittle = data.tittle();

    }

}
