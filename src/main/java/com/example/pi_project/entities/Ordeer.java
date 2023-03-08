package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ordeer implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JsonIgnore
    private Delivery delivery;

    //@ManyToOne
    //@JsonIgnore
    //private Donation donation;




}
