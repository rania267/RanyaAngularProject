package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Provider implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String company;
    private String address;
    private String phone;
    private String email;


@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
@JsonIgnore
private Set<Delivery> deliveries;

    //@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    //@JsonIgnore
    //private Set<Offer> offers;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Contract> contracts;

}
