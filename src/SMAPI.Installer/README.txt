     ___           ___           ___           ___        ___     
    /  /\         /__/\         /  /\         /  /\      /  /\    
   /  /:/_       |  |::\       /  /::\       /  /::\    /  /:/    
  /  /:/ /\      |  |:|:\     /  /:/\:\     /  /:/\:\  /  /:/     
 /  /:/ /::\   __|__|:|\:\   /  /:/~/::\   /  /:/~/:/ /  /::\ ___ 
/__/:/ /:/\:\ /__/::::| \:\ /__/:/ /:/\:\ /__/:/ /:/ /__/:/\:\  /\
\  \:\/:/~/:/ \  \:\~~\__\/ \  \:\/:/__\/ \  \:\/:/  \__\/  \:\/:/
 \  \::/ /:/   \  \:\        \  \::/       \  \::/        \__\::/ 
  \__\/ /:/     \  \:\        \  \:\        \  \:\        /  /:/  
    /__/:/       \  \:\        \  \:\        \  \:\      /__/:/   
    \__\/         \__\/         \__\/         \__\/      \__\/    


SMAPI lets you run Stardew Valley with mods. Don't forget to download mods separately.


Player's guide
--------------------------------
See https://stardewvalleywiki.com/Modding:Player_Guide


Manual install
--------------------------------
THIS IS NOT RECOMMENDED FOR MOST PLAYERS. See instructions above instead.
If you really want to install SMAPI manually, here's how.

1. Download the latest version of SMAPI: https://github.com/Pathoschild/SMAPI/releases
2. Unzip the .zip file somewhere (not in your game folder).
3. Copy the files from the "internal/Windows" folder (on Windows) or "internal/Mono" folder (on
   Linux/Mac) into your game folder. The `StardewModdingAPI.exe` file should be right next to the
   game's executable.
4.
  - Windows only: if you use Steam, see the install guide above to enable achievements and
    overlay. Otherwise, just run StardewModdingAPI.exe in your game folder to play with mods.

  - Linux/Mac only: rename the "StardewValley" file (no extension) to "StardewValley-original", and
    "StardewModdingAPI" (no extension) to "StardewValley". Now just launch the game as usual to
    play with mods.

When installing on Linux or Mac:
- Make sure Mono is installed (normally the installer checks for you). While it's not required,
  many mods won't work correctly without it. (Specifically, mods which load PNG images may crash or
  freeze the game.)
- To configure the color scheme, edit the `smapi-internal/StardewModdingAPI.config.json` file and
  see instructions there for the 'ColorScheme' setting.
