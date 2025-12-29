# Complete Stacklands Cardopedia
Attempting to completely emulate Stackland's Cardopedia with some more added details. Thanks to Stacklands fandom contributors, modding community, and of course Sokpop for creating the amazing game.

## To-Dos
### Current Bookmark
* Add all cards images & data (& tags)
   * Details still needed (decompile?)
   * Wiki Bookmark: herbal_tea

### Pending
* Disclaimer cards
   * Equipment dropping
   * Villager type adoption
   * Idea discovery
   * Pack logic (undiscovered card rates)
   * Food spoil time?
* Refactoring
   * Fix 'Sidebar' CSS
   * Replace & animate plus/minus
   * Remove packs from card count
   * Make collapsible full container size
   * Apply binary search to 'FetchHelper' functions
      * Separate search file?
   * Audit times for EVERYTHING

### Future Implementation ... Maybe
* Mobile styles
* SearchParam injection catching
* Recipe/peeking tooltip
* Adjust 'DisplayCard' for displaying packs larger

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

## Extractable Components
* hmm