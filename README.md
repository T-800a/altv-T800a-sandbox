# altv-T800a-sandbox
welcome to my sandbox! \
These are **not** finished/polished resources. \
I am not a programmer by trade, this is just a hobby to keep me busy. \
And these are my first half decent things I made with Typescript and a little bit of VUE for alt:V.


## T8UG
![T8UG](img/img_t8ug.png?raw=true "pos logging tool")

positon loggin tool for alt:V

**Dependencies:**
- alt
- natives
- chat (from altv example resources)

open via chat command: ```/t8ug```\
if T8INT is used with the example menus: press ```F3``` and select the menu entry \
press ```NUM 0``` to log a position \
press ```NUM 3``` to spawn a ped on last logged position with logged 'heading/yawn' \
press ```NUM ,``` to focus the webview and activate the mouse


## T8INT
![T8INT](img/img_t8int.png?raw=true "interaction menu")

Interaction menu for alt:V. \
This is just my quirky take on an interaction menu...

**Dependencies:**
- alt
- natives
- chat (from altv example resources)

### requires: Simple JSONdb server side
```npm install --save simple-json-db```

*You need to copy the JSONdb folder to your server root.* \
It contains Json files with demo menus and object hashes for interaction.

### Menu
press ```E``` to interact with objects (proximity or raycast) \
press ```X``` to interact inside vehicle

press ```W``` or ```D``` to move up in menu \
press ```S``` or ```A``` to move down in menu

press ```Left Mouse``` to execute selected \
press ```Right Mouse``` to close menu


## T8VEH
![T8VEH](img/img_t8veh.png?raw=true "vehicle spawning menu")

A simple vehicle spawning menu using JSON files to build the menu.

**Dependencies:** 
- alt
- chat (from altv example resources)
- SHARED (assets resource for json files, included)

open via chat command: ```/t8veh```


## T8UNE
![T8UNE](img/img_t8une.png?raw=true "vehicle tuning menu")

A simple vehicle tuning menu.

**Dependencies:** 
- alt
- chat (from altv example resources)

open via chat command when sitting in/on vehicle: ```/tune``` \
open via T8INT when sitting in/on vehicle: press ```X``` and select the menu entry

The Menu is mostly with sliders, but Colors and Wheels are selected from dropdowns in categories.


## T8CLOTH
![T8CLOTH](img/img_t8cloth.png?raw=true "player cloth and props menu")

A very simple menu to change player cloth and props.

**Dependencies:**
- alt
- chat (from altv example resources)

open via chat command when outside vehicle: ```/cloth```
