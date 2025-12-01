# Complete Stacklands Cardopedia
Attempting to completely emulate Stackland's Cardopedia with some more added details. Thanks to Stacklands fandom contributors, modding community, and of course Sokpop for creating the amazing game.

## To-Dos
### Current Bookmark
* Add all cards images & data (& tags)
   * Card list complete - booster packs
   * Details still needed (decompile?)

### Pending
* Disclaimer cards
   * Equipment dropping
   * Villager type adoption
   * Idea discovery
   * Pack logic (undiscovered card rates)
* Refactoring
   * Fix 'Sidebar' CSS
   * Replace & animate plus/minus
   * Remove packs from card count
   * Make collapsible full container size
   * Apply binary search to 'FetchHelper' functions
      * Separate search file?

### Future Implementation ... Maybe
* Mobile styles
* SearchParam injection catching
* Recipe/peeking tooltip
* Adjust 'DisplayCard' for displaying packs larger

## Card Fields
* **Visible:** flavour-text; combat-text; equip-text; text-ref; extra-text
* **Collapsed:** drops; recipe; sources; uses
* Fields are ordered