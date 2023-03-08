package com.example.pi_project.entities;

import java.io.Serializable;

public class ContractStatistics implements Serializable {
        private double average;
        private double min;
        private double max;

        public ContractStatistics(double average, double min, double max) {
            this.average = average;
            this.min = min;
            this.max = max;
        }

        public double getAverage() {
            return average;
        }

        public double getMin() {
            return min;
        }

        public double getMax() {
            return max;
        }

        public void setAverage(double average) {
            this.average = average;
        }

        public void setMin(double min) {
            this.min = min;
        }

        public void setMax(double max) {
            this.max = max;
        }
    }

