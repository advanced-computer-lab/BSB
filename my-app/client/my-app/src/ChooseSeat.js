import React from 'react'
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";
import "./styles.css";
function ChooseSeat() {
    const rows = [
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },

            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },

        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 }
        ],
        [
            { number: 1 },
            { number: 2 },
            { number: 3, isReserved: true },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 }
        ],

    ];
    return (

        <div className="ChooseSeat">
            <h1>Seat Picker</h1>
            <SeatPicker rows={rows} maxReservableSeats={8} visible />
        </div>






    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ChooseSeat />, rootElement);


export default ChooseSeat
