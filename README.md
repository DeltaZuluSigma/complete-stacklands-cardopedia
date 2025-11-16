# Complete Stacklands Cardopedia
Attempting to completely emulate Stackland's Cardopedia with some more added details. Thanks to Stacklands fandom contributors, modding community, and of course Sokpop for creating the amazing game.

## To-Dos
### Current Bookmark
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
   * Animate plus/minus

### Future Implementation ... Maybe
* Mobile styles
* SearchParam injection catching
* Recipe/peeking tooltip
* Adjust 'DisplayCard' for displaying packs larger

## Card Fields
* **Visible:** flavour-text; combat-text; equip-text; text-ref; extra-text
* **Collapsed:** drops; recipe; sources; uses
* Fields are ordered

<Percent> chance to <Effect & Target>

### combat-text
```
Combat Level #

<Effects>

Attack Type: [Melee, Ranged, Magic, Air, Foot, Armour]
Attack Speed: [Very Slow (3.5s), Slow (2.9s), Normal (2.3s), Fast (1.7s), Very Fast (1.1s)]
Hit Chance: [Very Small (50%), Small (59%), Normal (68%), High (77%), Very High (86%)]
Damage: [Very Weak (1), Weak (2), Normal (3), Strong (4), Very Strong (5), Extremely Strong (6)]
Defense: [Very Weak (1), Weak (2), Normal (3), Strong (4), Very Strong (5)]
```
* Critical Hit - Target (10%); Poison - Target (10-30%); Anxious - Target (10%); Stun - Target/All (10-20%); Sick - All (100%); Bleed - Target (10%)
* Lifesteal - Target (10%); Lifesteal - Random (5%); 
* Self-Invulnerable (10%); Frenzy - Self (10%)

### equip-text
```
Item Level #

<Effects>

Attack Type: [Melee, Ranged, Magic]
Max Health: [-12:+100]
Attack Speed: [-1:+5]
Hit Chance: [-1:+5]
Damage: [-1:+5]
Defense: [-1:+5]
```
* Critical Hit - Random (10%); Critical Hit - Target (5-15%); Critical Hit - Self (10%); Critical Hit - All (7%)
* Bleed - Target (10-20%); Bleed - Self (10%); 
* Heal - Lowest (10-15%); Heal - All Friendly (15%); Heal - Random Friendly (10%); Heal - Self (10%)
* Frenzy - Self (10%); Frenzy - Random Friendly (10-20%)
* Stun - Random (10-20%); Stun - Target (10-20%)
* Poison - Target (10%); Poison - Random (10%); Poison - All (5%)
* Lifesteal - Target (5-20%); Lifesteal - Random (10%)
* Invulnerable - Random Friendly (10%); Invulnerable - Self (7-10%)
* Damage - All (10-15%); Damage - Random (7%);
* Anxious - Self (10-50%); 

### More Info / Validation Required
* Mainland
   * Idea: Altar
   * Rumor: Combat
   * Shaman
   * New Weaponry Pack
* Island
   * Pirate Boat
* World of Death
   * Curse of Death
   * Life is Short Pack (NAY)
* Cities
   * Wild Weather Pack