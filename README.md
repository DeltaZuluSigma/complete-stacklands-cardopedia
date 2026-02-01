# Complete Stacklands Cardopedia
Attempting to completely emulate Stackland's Cardopedia with some more added details. Thanks to Stacklands fandom contributors, modding community, and of course Sokpop for creating the amazing game.

## To-Dos
### Current Bookmark
* Refactoring
   * Fix 'Sidebar' CSS

### Future Implementation ... Maybe
* Disclaimer cards
   * Equipment dropping
   * Villager type adoption
   * Idea discovery
   * Pack logic (undiscovered card rates)
* Card audit
   * Food spoil time?
   * Pack-to-idea relationship
   * Equipment-to-villager-type
* Refactoring
   * Remove packs from card count
   * Apply binary search to 'FetchHelper' functions
      * Separate search file?
* Mobile styles
* Recipe/peeking tooltip

## Card Fields
* **Visible:** flavour-text; combat-text; equip-text; text-ref; extra-text
* **Collapsed:** drops; recipe; sources; uses
* Fields are ordered

### Detail Listing Conventions
*Alphabetically*

* Extra Text:
   * Time to harvest; Time to explore; Requires; Can have; Wellbeing Conditions
* Recipe:
   * "This card is made according to what idea?"
   * "This card is made from what stack of cards?"
   * Ideas > Undocumented recipes
* Sources:
   * "Where can this card come from?"
   * Primary Source Case > Cards > Packs > Other explanations
* Uses:
   * "This card is used in that card's recipe" > Plain link
   * "This card has an interaction with that card [not described in the card]" > Explanation
   * Otherwise, full explanation