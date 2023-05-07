package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Offer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Long numOffer;
    private String description;
    private String discount_details;
    private String name;
    private Long nbr_offer;
    private float OrderPrice;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Timestamp creation_date;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Timestamp expiration_date;
    @OneToMany(mappedBy = "offer")
    @JsonIgnore
    private Set<Product> products;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Provider> providers;
    private int nbLikeOffer;
    private int nb_dislike_offer;
    private  boolean archived;
    private boolean hasDiscount = false;

    public boolean getHasDiscount() {
        return hasDiscount;
    }

    public void setHasDiscount(boolean hasDiscount) {
        this.hasDiscount = hasDiscount;
    }
    //---------
    @Temporal(TemporalType.DATE)
    private Date lastLikeDate;
    @Temporal(TemporalType.DATE)
    private Date lastDislikeDate;

    public void like() {
        nbLikeOffer++;
        lastLikeDate = new Date();
    }

    public void dislike() {
        nb_dislike_offer++;
        lastDislikeDate = new Date();
    }


}
