import React from "react";
import { useLocation } from "react-router-dom"

const MealDetail = () => {

    const location = useLocation()

    return (
        <>{location.state.id}
            <img src="" alt="Meal" />
            <button>Check Out</button>
        </>
    )
}

export default MealDetail;