# altv-T800a-sandbox
welcome to my sandbox! \
These are **not** finished/polished resources. \
I am not a programmer by trade, this is just a hobby to keep me busy. And these are my first half decent things I made with js, typescript and a little bit of vue for alt:V.


## T8INT
![T8INT](img/img_t8int.png?raw=true "interaction menu")

interaction menu for alt:V \
this is just my quirky take on an interaction menu

**Dependencies:** alt, natives, chat

### requires: Simple JSONdb
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



## T8UG
![T8UG](img/img_t8ug.png?raw=true "pos logging tool")

positon loggin tool for alt:V

**Dependencies:** alt, natives, chat

open via T8INT: press ```F3``` and select the menu entry \
open via chat commant: ```/t8ug```\
press ```NUM 0``` to log a position \
press ```NUM 3``` to spawn a ped on last logged position with logged 'heading/yawn' \
press ```NUM ,``` to focus the webview and activate the mouse

