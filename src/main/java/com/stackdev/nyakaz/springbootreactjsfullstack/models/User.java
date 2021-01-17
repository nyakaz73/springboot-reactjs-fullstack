package com.stackdev.nyakaz.springbootreactjsfullstack.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long  id;
    private String name;
    private String surname;
    private String email;
    private String username;
    private String password;
}
