import React from "react";

import "bulma";

const electric = props => {
    return (
        <p className="columns">
            <p className="column is-4">
                <p>
                    <label htmlFor="alpha" className="label">Альфа</label>
                    <input type="text" id="alpha" className="input" />
                </p>
                

                <p>
                    <label htmlFor="beta" className="label">Бета</label>
                    <input type="text" id="beta" className="input" />
                </p>
                

                <p>
                    <label htmlFor="res" className="label">Результат</label>
                    <input type="text" id="res"  className="input"/>
                </p>
                
            </p>

            <p className="column is-4">
                <label htmlFor="dist" className="label">Закон распределения</label>
                <select id="dist"  className="select">
                    <option>Нормальный</option>
                </select>
            </p>

            <p className="column is-4">
                <label htmlFor="gamma" className="label">Гамма-процентная наработка, %</label>
                <input type="text" id="gamma" className="input"/>
            </p>
        </p>
    )
}

export default electric;