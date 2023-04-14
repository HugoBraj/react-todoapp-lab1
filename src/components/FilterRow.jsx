import React, { useState } from "react";
import { actions, filtersTri, useFilter} from '../store'

export default function FilterRow() {
    const activeFilter = useFilter()

    const r = document.querySelector('#root');

    return (
      <>
      <div className="h-title">Trié par :</div>
      <div style={{ padding: 20 }}>
        {filtersTri.map((filter) => (
          <button key={filter}
            style={{
              fontWeight: activeFilter === filter ? 'bold' : 'normal',
            }}
            onClick={() => {
              actions.toggleFilter(filter)
            }}>
            {filter}
          </button>
        ))}
      </div>
      </>
    )
  }