# Pf Data 1e

This app uses "open game content" (OGC) encoded in human-readable format in the [src/json](./src/json/) directory. See [OPENGAMECONTENT.md](./OPENGAMECONTENT.md) for specifics on that license and what it covers.

This app uses trademarks and/or copyrights owned by Paizo Inc., used under Paizo's Community Use Policy ([paizo.com/communityuse](https://paizo.com/communityuse)). We are expressly prohibited from charging you to use or access this content. *Pf Data 1e* is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit [paizo.com](https://paizo.com).

The non-OGC content of *Pf Data 1e* is Copyright 2024 by Jason Tamez. It is also available under the [GNU General Public License](./GNULICENSE.md).

>*Pf Data 1e* is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
>
>*Pf Data 1e* is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
>
>You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

## Instructions

After installing this project, you will need to run `prebuild-create-index.js` to generate the search index and many helper files. If you alter the `.json` files, you will need to run the script again.

These extra files are not included in the main repository because they rely on the main `.json` files for their data. Per the Open Game License, the raw game data must remain human-readable. The search index and helper files are not as readable, therefore we generate them as needed, keeping a separation between the human-readable data and the computer-usable data. This also means that you only need to keep track of the game data in one place, and update everything else as needed.
