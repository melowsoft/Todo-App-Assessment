import React from 'react'

function Loader(){
    return (
        <div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
            <img class="icon" src="https://raziraz.github.io/codepen/img/bolt.svg" />
        </div>
    )
}

export default Loader