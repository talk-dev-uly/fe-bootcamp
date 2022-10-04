import React, { useEffect, useState } from "react";
// import { Card } from "./Card";

export const Main: React.FC<{}> = () => {
    const [count, setCount] = useState<number>(1);
    // const inputRef = useRef<HTMLInputElement>();

    const handleIncrement = () => {
        setCount(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        setCount(prevState => prevState - 1);
    }

    useEffect(() => {
        // console.log(count * 2);
        // inputRef.current && inputRef.current.focus();
    }, [count])

    return (
        <main className="bg-violet-800 w-full h-full text-white">
            <button className="w-10 bg-amber-600" onClick={handleDecrement}>-</button>
            <span className="text-xl px-4">{count}</span>
            <button className="w-10 bg-amber-600" onClick={handleIncrement}>+</button>
            <p className="text-2xl font-bold">{count % 2 === 0 ? "EVEN" : "ODD"}</p>
            {/* <input ref={inputRef} name="description" /> */}
            {/* <ul>
            {this.state.pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name} - {pokemon.type}</li>)}
            </ul> */}
            {/* <Card name="Bulbasaur" hp={25} mana={15} group="Leaf" skills={[{name: "Razor Leaf", damage: 5}, {name: "Vine Whip", damage: 7}]} /> */}
        </main>
    )
}