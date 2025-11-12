# Complete Stacklands Cardopedia
Attempting to completely emulate Stackland's Cardopedia with some more added details. Thanks to Stacklands fandom contributors, modding community, and of course Sokpop for creating the amazing game.

## To-Dos
### Current Bookmark
* Searching tags tooltip
* Shrink 'Cards.json'
* Shrink 'Details.json'

### Pending
* Disclaimer cards
   * Equipment dropping
   * Idea spawning
* Add all cards images & data (& tags)
* Refactoring
   * Fix 'Sidebar' CSS
   * Shrink 'Cards.json'; convertable names & unique image ids instead of store
   * Shrink 'Details.json' combat text?
   * Apply binary search to 'FetchHelper' functions

### Future Implementation ... Maybe
* Mobile styles
* SearchParam injection catching
* Recipe/peeking tooltip

## Card Fields
* **Visible:** flavour-text; combat-text; equip-text; text-ref; extra-text
* **Collapsed:** drops; recipe; sources; uses
* Fields are ordered

### Tags
* \#source; \#shiny; \#farming; \#animal; \#power; \#npc; \#currency
* \#melee; \#ranged; \#magic; \#head; \#chest
* \#mainland; \#island; \#death; \#greed; \#sadness; \#cities

### More Info / Validation Required
* Mainland
   * Idea: Altar
   * Rumor: Combat
   * Shaman
   * New Weaponry Pack
* Island
   * Pirate Boat
* Cities
   * Wild Weather Pack