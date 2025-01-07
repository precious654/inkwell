"use client"
import Select from 'react-select'
import React from "react";

const options = [
    {value: 'business', label: 'Business'},
    {value: 'technology', label: 'Technology'},
    {value: 'travel', label: 'Travel'},
    {value: 'sports', label: 'Sports'},
    {value: 'entertainment', label: 'Entertainment'},
    {value: 'weather', label: 'Weather'},
    {value: 'more', label: 'more'},
]

const SelectComponent = () => {
    return (
        <Select options={options} className="w-full" />
    )
}

export default SelectComponent;