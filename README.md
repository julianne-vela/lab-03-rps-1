# Rock Paper Scissor Plan!

HTML SETUP:

- 2 radio buttons

  - Head and Tails
  - Need the same 'name' and 'value'

- 3 images for rock, paper, scissors

- button for user to play their choice

- empty divs/spans for text input
  - Wins
  - Losses
  - total
  - current result

JS

- Grab DOM elements - with id's

- Initalize state

  - start with wins = 0
  - start with losses = 0

- Add event listeners
- on click:
  1. store comps rps choice


      - make comps choice random between R, P, and S
      - use Math.random(). 0 rock, 1 paper, 2 scissors
  2. store user rps choice
  - get the checked input and get value
  3. compare users guess to comps guess
  4. Display the result
