import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from "@chakra-ui/react";
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
        <main>
            <button onClick={handleDecrement}>-</button>
            {count}
            <button onClick={handleIncrement}>+</button>
            <p>{count % 2 === 0 ? "EVEN" : "ODD"}</p>
            <Button bg={"orange"} variant={"outline"} isLoading>PRESS ME</Button>
            <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            {/* <input ref={inputRef} name="description" /> */}
            {/* <ul>
            {this.state.pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name} - {pokemon.type}</li>)}
            </ul> */}
            {/* <Card name="Bulbasaur" hp={25} mana={15} group="Leaf" skills={[{name: "Razor Leaf", damage: 5}, {name: "Vine Whip", damage: 7}]} /> */}
        </main>
    )
}