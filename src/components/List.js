import React from 'react';
import Card from './Card';

const CardList = ({ stateData }) => {
    return (
        <div>
            {
                stateData.map((user, i) => {
                    if (stateData[i].state === 'Andaman and Nicobar Islands') {
                      stateData[i].state = 'A&N Islands'
                    } else if (stateData[i].state === 'Dadra and Nagar Haveli and Daman and Diu') {
                      stateData[i].state = 'DNHDD'
                    }
                    return (
                    <Card
                        state={stateData[i].state}
                        active={stateData[i].active}
                        confirmed={stateData[i].confirmed}
                        deaths={stateData[i].deaths}
                        recovered={stateData[i].recovered}
                    />)
                })
            }
        </div>
    )
}

export default CardList;
