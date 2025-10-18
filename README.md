# Complete Stacklands Cardopedia
Attempting to completely emulate Stackland's Cardopedia with some more added details. Thanks to Stacklands fandom contributors, modding community, and of course Sokpop for creating the amazing game.

## Process
* **Static Vertical Slice Implementation**
* Static Full Implementation
* Functional Implementation

## Personal To-Do
* Complete `MetaData.tsx`
* Style static implementation
* ~~GET data parsing?~~
* Add all cards images & data
* Search capability
* Tag search capability

### Current Bookmark
* `util/FetchHelpers.tsx`
* `components/CollapsibleCategory.tsx`

## Card Types & Fields
* Resource Structures - value; flavour-text; drops; sources
* Functional Structures - value; \[inventory\]; \[pollution\]; \[food\]; flavour-text; recipe; uses
* Power Structures - value; flavour-text; recipe; \[sources\]; uses
* Trophy Structures - \[value\]; flavour-text; \[recipe\]; uses
* Hostile Structures - flavour-text; sources; uses
* Landmarks - flavour-text; recipe; uses
* Villagers - value; health; flavour-text; combat-text; recipe; sources
* NPCs (Structure; Villager; Spirits & Curses) - flavour-text; extra-text; uses
* Currency Resources - flavour-text; sources; uses
* Standard Resources - value; flavour-text; \[extra-text\]; recipe; sources; uses
* Trophy Resources - flavour-text; \[recipe\]; sources; uses
* Ideas - value; flavour-text; text-ref; sources
* Foods - value; food; flavour-text; \[recipe\]; sources
* Mobs (Mobs; Fish) - health; flavour-text; combat-text; drops; sources
* Locations - value; flavour-text; \[extra-text\]; drops; \[recipe\]; sources
* Rumors - value; flavour-text; sources
* Equipment - value; flavour-text; equip-text; \[recipe\]; sources; \[uses\]
* Weather - value; flavour-text; sources; uses
* Disasters & Events - flavour-text; extra-text; sources
* Booster Packs - flavour-text; cost; drops