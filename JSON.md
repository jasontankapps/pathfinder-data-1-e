# JSON Files

JSON files are described in [schema.json](/schema.json).

Most text is in Markdown format. They are converted into JSX using `marked`, `marked-footnote`, and `marked-directive`. (Installed with npm.)

`Marked-directive` is used extensively, with many custom directives.

There is also a system of encoding links, replacing the Markdown structure `[text](/some/text)` with a structure like `‹some/text›`, using single angle quotes (not angle brackets). (The Markdown structure can still be used, if it doesn't conflict with directives.)

## Link System

A string is converted into a link if it is surrounded by `‹angle quotes›` begins with a string of lowercase letters, numbers, and/or underscores, followed by a slash `/` and at least one other character.

### Simple form

`‹protocol/link text›` is transformed into `[link text](protocol/link_url)`.

`Link text` is converted into `link_url` by first converting the text to lowercase. Next, all spaces, dashes and slashes `[- /]` are converted into underscores `_`. Finally, all non-alphanumeric and non-underscore characters are deleted.

> `‹protocol/Gorgon's Bar/Grill!›` => `[Gorgon's Bar/Grill!](protocol/gorgons_bar_grill)`

### Adding extra link text

You can add extra `link text` without adding extra `link_url` by enclosing it in `«double angle quotes»`.

> `‹protocol/Pizza«-riffic› Patrol›` => `[Pizza-riffic Patrol](protocol/pizza_patrol)`

When `«extra text»` is at the start or end of the `link text`, you can omit the opening/closing angle quotes.

> `‹protocol/un»loved« foods›` => `[unloved foods](protocol/loved)`

### Adding extra link_url

You can add extra `link_url` without adding extra `link text` by enclosing it in `<angle brackets>`.

> `‹protocol/starting<_a> business›` => `[starting business](protocol/starting_a_business)`

When `<extra_url>` is at the start or end of the `link text`, you can omit the opening/closing angle brackets.

> `‹protocol/a1_>company time<_policy›` => `[company time](protocol/a1_company_time_policy)`

**Note:** `<extra_url>` is not converted or changed in any way, so be careful not to insert errors.

> `‹protocol/a b c< D E> f›` => `[a b c f](protocol/a_b_c D E_f)`

### Using both extras together

You can use `«extra text»` and `<extra_url>` together, when needed.

> `‹protocol/break«ing» up is<_not> hard›` => `[breaking up is hard](protocol/break_up_is_not_hard)`

You can omit the opening/closing tags at the begining/end of `link text` of both types, but the `<url_text>` must stay to the outsides.

> `‹protocol/new>classic» style «is back<_dec2025›` => `[classic style is back](protocol/new_style_dec2025)`

## SOURCE link system

A string is converted into a special Sources link if it starts with `SOURCE`, a single space, other text, and is surrounded by `‹angle quotes›`. It must exist on its own single line, followed by an empty line `""`, or it must exist on its own single line along with two or more trailing spaces.

>`‹SOURCE Source Text›`

The `Source Text` is split into multiple lines at every semicolon (`;`) and each `bit` is analyzed separately.

A `bit` must start with a valid Source, found in `sources.json`, whose text translates to the Source's `property_text` as if it was `link_text` above.

A `bit` can optionally be appended with a slash (`/`) and text (typically a page number) that further identifies the source.

| SOURCE link | Output |
| --- | --- |
| `‹SOURCE Some Source›` | `<strong>Sources:</strong> [Some Source](source/some_source)` |
| `‹SOURCE This Book/12›` | `<strong>Sources:</strong> [This Book pg 12](source/this_book)` |
| `‹SOURCE A Fine Source #14/10, 34, 45-70›` | `<strong>Sources:</strong> [A Fine Source #14 pg 10, 24, 45-70](source/a_fine_source_14)` |
| `‹SOURCE Some Source Text/10-22;Other Source/14;Another Source›` | `<strong>Sources:</strong> [Some Source Text pg. 10-22](source/some_source_text), [Other Source pg 14](source/other_source), [Another Source](source/another_source)` |

## Directives

### Inline Directives

Inline directives start with `@`.

| Simple Inline Directives | Description |
| --- | --- |
| `@ripple[protocol/link text]` | Adds a link with IonRippleEffect. The bracketed text follows the link system, above. |
| `@hll[protocol/link text]` | Adds a link in a highlighted link color.  The bracketed text follows the link system, above. |
| `@HL[text]` | Adds highlighted text. |
| `@hl[text]` | Adds highlighted text. |
| `@FN[X]` | Creates a "fake" footnote with the character X. |
| `@FN[Body of footnote]{from=X}` | Creates a "fake" footnote that links back to (and is linked to by) footnote X. |
| `@altCapstoneDesc` | Creates a preamble for the Alternate Capstones section of a class. |
| `@span[text]` | Puts text in a `<span>` block. |
| `@span[text]{className?=""}` | As above, but has properties that will be included in the `<span>` tag. |
| `@b[text]`, `@strong[text]` | As above, but puts text in a `<strong>` block. Use only to include properties like `className`. |
| `@i[text]`, `@em[text]` | As above, but puts text in an `<em>` block. Use only to include properties like `className`. |

#### @list

This is used to create long lists of linked output, where all the links share the same protocol.

`@list[Title of List]{all="one~two~three..." hl? and? sep?="~" comma?=", " link=protocol}`

Creates a single line of output in the following form:

```html
<strong>Title of List</strong>: <Link to="protocol/one">one</Link>, <Link to="protocol/two">two</Link>, <Link to="protocol/three">three</Link>[, ...]
```

- `all` is REQUIRED and contains a list of items that follow the link text conventions of the link system above
- `link` is REQUIRED and is the protocol that will be prepended to each link
- `sep` is the character(s) used to separate the items included in `all`, defaulting to `"~"`
- `comma` is used to separate the `<Link>s` in the output, defaulting to `", "`
- If `hl` is present and true, the `<strong>` tag will be highlighted
- If `and` is present and true, the word "and" is included before the final `<Link>`, if needed

#### @primary and @alternate

`@primary[some text] @alternate[some other text]`

Used in `class_abilities.dares` and `archetypes_monk.json` to separate out grit/panache and monk/unchained monk abilities. These texts may be pulled from either of two sources, with slightly differing texts for each.

### Block Directives

Block elements start with `::`.

#### Shared attributes

All block-level elements can take a `clear` attribute, which puts them below any floating element that may be above them.

#### Simple HTML-like header directives

>`::h2[Header]`  
>`::h3[Header]`  
>`::h4[Header]`  
>`::h5[Header]`  
>`::h6[Header]`

- `::h2[Header]` renders a simple `<h2>Header</h2>` block
    - `::h3` through `::h6` render `<h3>` through `<h6>`, respectively

>`::hl2[Link]{pre?="" post?=""}`  
>`::hl3[Link]{pre?="" post?=""}`  
>`::hl4[Link]{pre?="" post?=""}`  
>`::hl5[Link]{pre?="" post?=""}`  
>`::hl6[Link]{pre?="" post?=""}`  

- `::hl2[Link]` renders an `<h2>` block, but the `Link` is treated as `Link text` and renders an actual link inside the `<h2>`
    - if `pre` is provided, it is prepended as plain text
    - if `post` is provided, it is appended as plain text
    - `::hl3` through `::hl6` are treated the same way, but output as `<h3>` through `<h6>`, respectively

#### Simple Header-type directives

| Header Block Directives | Description |
| --- | --- |
| `::gh[Header]` | Adds a general header block. |
| `::sh[Subheader]` | Adds a general subheader. |
| `::mh[Monster Header]{cr?=## mr?=##}` | Adds a header block for a monster with CR and MR. |
| `::fh[Faith/Deity Header]{sub=""}` | Adds a block containing the deity/faith's name and a subtitle (`sub`). |
| `::ph[Plane Header]{sub?="" desc?="" cat?=""}` | Adds a header block for a plane, optionally with a subtitle (`sub`), short description (`desc`) and category (`cat`). |

#### ::th

This creates a header for a monster template, including a quick fact sheet.

`::th[Header text]{cr="" source="" acquired? inherited? simple? summonable? maybesummon?}`

- `cr` is REQUIRED and indicates any CR adjustment the template makes
- `source` is REQUIRED and indicates the source material(s) in `SOURCE text` format

The other attributes are optional. If missing (or provided and false), they indicate a "NO" on the fact sheet.

- `acquired` indicates "YES" for an Acquired Template
- `inherited` indicates "YES" for an Inherited Template
- `simple` indicates "YES" for a Simple Template
- `summonable` indicates "YES" for a Summonable Template
- `maybesummon` indicates "See Text" for a Summonable Template; this overrides the "NO" of a missing/false `summonable` but does not override a present/true `summonable`

#### Main-page Blocks

These only apply to `main*.json` files.

| Simple Main-page Directives | Description |
| --- | --- |
| `:::mhr` | Adds a horizontal rule/section break. |
| `:::mainheader[Header]` | Adds a header line. |

##### ::main

This is the main workhouse of most "main" pages. It inserts a link to somewhere else.

`::main[Link Text]{to="protocol/link_text" rev? ind? end?="" endem?="" bottom?=""}`

- `rev` indicates the link should text-align to the end (default is start-aligned)
- `ind` indicates the link should have a small indent; this overrides `rev` and keeps it start-aligned
- `end` is a string that will be put on the same line as the link, but end-aligned
- `endem` is the same as `end` but the text will be italicized
- `bottom` is a string that will be shrunk, italicized, and put below the link

#### ::prereq

Used to make a simple prerequisites block.

`::prereq{l?=## c?="" r?="" g1?="" g1title?="" g1protocol?="" sep?="~" other?=""}`

- `l` indicates a required level, like `l=12` for "12th level"
    - `c` can be used to specify a specific class, like `c=bard` for "12th level bard"
- `r` indicates a required race
- `g1` is a list of items in `link text` format
    - `g1protocol` is required with `g1` and indicates the link protocol
    - `g1title` is optional, and indicates a header line for the list
    - `sep` is the string that separates the items in the list, defaulting to "~"
- `other` is text that will be directly shown

#### ::spelldeitynote

This inserts a simple aside into a spell.

```html
<aside>Some spells are more common among the worshipers of a god. Worshipers of a spell's associated deity always treat the spell as common, and need not research it in order to prepare or learn it. This spell is available to members of other faiths, though some temples or religious organizations may proscribe the use of specific spells. -- \[Inner Sea Gods pg. 228\]\(source/inner_sea_gods\)</aside>
```

#### ::archetype

Creates a small archetype description for a class page.

`::archetype[Name of Archetype]{c="" r="" e=""}`

- `c` is the class this is an archetype for
    - Must be in `link_url` format, i.e. `c=unchained_monk` and not `c="unchained monk"`
- `r` is the list of abilities the archetype replaces or modifies
- `e` is a short description of the archetype

#### ::drug

This inserts a block describing a drug.

`::drug[Name (optional)]{start? <addictionPotential> dc=## price=## type="" eff1="" eff2?="" <drugDamage>}`

- `start` indicates the block should start-align (end-align is default)
- `<addictionPotential>`: `minor | moderate | severe | addict=""`
    - A minor `minor`, `moderate`, or `severe` prop indicate the drug's addiction potential
    - The `addict` prop contains addiction info that doesn't neatly fit into the three categories
- `dc` is the drug's Fortitude save DC to avoid addiction
- `price` is the cost in gp (use decimals for silver or copper)
- `type` indicates the type of drug (usually ingested, injury, inhaled, or some combination of the three)
- `eff1` and `eff2` are used to describe the drug's effects; usually, only `eff1` is needed
- `<drugDamage>`: `dmgStr?=## dmgDex?=## dmgCon?=## dmgInt?=## dmgWis?=## dmgCha?=## dmg=?""`
    - `dmgStr` is the amount of strength damage the drug deals; `dmgDex` and so on work the same way
    - `dmg` is any extra damage the drug may do
    - **At least one** of these props must be used

#### ::trap

This inserts a block describing a trap.

`::trap[Name (Optional)]{start? <typing> cr=## terrain?="" pdc="" dddc="" trigger="" <reset>? eff=""}`

- `start` indicates the block should start-align (end-align is default)
- `<typing>`: `magic | mechanical`
    - Either a `magic` or `mechanical` prop must be provided to indicate what type of trap this is
- `cr` is the CR of the trap
- `terrain` is any associated terrain(s) the trap may have
- `pdc` is the Perception DC, usually just a number
- `dddc` is the Disable Device DC, usually just a number
- `trigger` describes what triggers the trap, and is usually "touch", "location", or "proximity (with more info)"
- `<reset>`: `automatic | manual | repair`
    - `automatic` indicates automatic reset
    - `manual` indicates manual reset
    - `repair` indicates a repair reset
    - All three above can optionally take a string argument that overrides the reset type
    - If no reset type is given, reset is labeled as `"none"`
- `eff` describes the effect(s) of the trap

#### ::haunt

This inserts a block describing a haunt

`::haunt[Name (optional)]{start? notice="" hp=## weak?="" trigger="" reset=""}`

- `start` indicates the block should start-align (end-align is default)
- `notice` is the skill DC needed to notice the trap, typically Perception
- `hp` is the amount of hp the haunt has
- `weak` lists any special weaknesses
- `trigger` is the action that triggers the haunt, and is often "touch" or "proximity"
- `reset` is how long the haunt takes to reform after it manifests

#### ::aff

This inserts an affliction block, usually poison, curse, disease, or infestation.

`::aff[Name (Optional)]{start? <icon> nolink? <afflictiontype>? <savingthrow> <frequency> onset?="" track?="" trackmod?="" <effects>? <cure>? extra?=""}`

- `start` indicates the block should start-align (end-align is default)
- `<icon>`: `iconP | iconI | iconC | iconD | iconA`
    - Determines what icon to use with the block, and where it links to
    - `iconP` indicates poison, `iconI` is an infestation, `iconC` is for a curse, `iconD` is a disease, and `iconA` is for a general affliction that doesn't fall into any previous category
- If `nolink` is present, the icon will **not** link anywhere
- `<afflictiontype>`: `<poison | curse | infest | disease>? type=""?`
    - `infest` indicates the type should be `"Infestation"`; `poison`, `curse`, and `disease` are self-explanatory
    - If `type` is present along with another one of these props, the contents of `type` are appended to the label with a semicolon
    - If only `type` is present, it will be used by itself
    - If none of the above are present, the type will be presented as `"Affliction"`
- `<savingthrow>`: `save="" | saveF=## | saveW=## | <dcexpression>`
    - If `save` is present, it will be used as the saving throw information
    - If `saveF` is present, the saving throw will be Fortitude with the given DC
    - If `saveW` is present, the saving throw will be Will with the given DC
    - `<dcexpression>` : `<dcF | dcW | dcR> dcYou? dcPoss?="" dcIt?="" <dcLev="" | dcHD=""> dcMod="">`
        - Model output: `"[Type] 10 + 1/2 [Determiner] [Level or HD] + [Possessive] [Stat] modifier"`
        - Example: `dcF dcLev=cleric dcMod=Wis` => `"Fort 10 + 1/2 the cleric's level + their Wis modifier"`
        - `[Type]`: `dcF` indicates a `"Fort"` save, `dcW` is `"Will"`, and `dcR` is `"Refl"`
        - `[Determiner]`: if `dcYou` is present, this is `"your"`, otherwise it is `"the"`
        - `[Level or HD]`:
            - If `dcLev` is provided, this becomes `"(dcLev)[Post] level"`
            - If `dcHD` is provided instead, this becomes `"(dcHD)[Post] HD"`
                - `[Post]`:
                    - If `dcPoss` is provided, it is used here
                    - If `dcYou` is present, this becomes an empty string `""`
                    - Otherwise, this becomes `"'s"`
        - `[Possessive]`:
            - If `dcYou` is present, this becomes `"your"`
            - If `dcIt` is provided, it is used here
            - Otherwise, this becomes `"their"`
        - `[Stat]`: This is the value of `dcMod`
- `<frequency>`: `freq="" | freqR=## | freqM=## | freqH=## | freqD=##`
    - If `freq` is provided, it is used to describe the frequency, and the rest is ignored
    - Model output: `"1/[Unit] for [Amount] [Unit]s"`
    - Example: `freqR=3` => `"1/round for 3 rounds"`
        - `[Unit]` if `freqR` is provided, this is `"round"`; likewise, `freqM` is `"minute"`, `freqH` is `"hour"`, and `freqD` is `"day"`
        - `[Amount]` is the value of the provided prop
- `onset` describes the onset time of the affliction, if any
- `track` describes what attribute track the affliction uses, if any (this is for Unchained afflictions)
    - `trackmod` gives a new track for the affliction to follow, if needed
- `<effects>`: `eff="" | ineff="" seceff="" | <effects2> | <initialeffects> <secondaryeffects>`
    - `eff` describes the effects of the affliction
    - `ineff` describes the initial effects of the affliction, while `seceff` describes any secondary effects
    - `<effects2>`: `<statdamage>? <statdrain>? effExtra?="" effOr?`
        - `<statdamage>`: `effStr="" effDex="" effCon="" effInt="" effWis="" effCha=""`
            - `effStr` is the amount of Strength *damage* the affliction causes
            - `effDex` through `effCha` target the other attributes
        - `<statdrain>`: `effStrD="" effDexD="" effCon=D"" effIntD="" effWisD="" effChaD=""`
            - `effStrD` is the amount of Strength *drain* the affliction causes
            - `effDexD` through `effChaD` target the other attributes
        - `effExtra` is any other extra damage
        - **At least one** of the above must be present
        - The properties above are joined together in the order above
            - If only two props are present, they are joined as `<prop1>[joiner]<prop2>`
                - `[joiner]` defaults to `" and "`
                - If `effOr` is present, `[joiner]` becomes `" or "`
                - If `effOr` is a string, that string will become `[joiner]`
            - If three or more props are present, the first through penultimate properties will be joined together with `", "`, then a single comma will be added to the end `","`, followed by the `[joiner]` expression, and finally the last property.
                - Example 1: `prop1, prop2, prop3, and prop4` (four props)
                - Example 2: `prop1 and prop2` (two props)
    - `<initialeffects> <secondaryeffects>`
        - These follow the same format as `<effects2>` above, with the following modifications
            - `<initialeffects>` properties begin with `in`
                - For example, `effStr` becomes `ineffStr`
            - `<secondaryeffects>` properties begin with `sec`
                - for example, `effIntD` becomes `seceffIntD`
            - **At least one** property must be present in each group, excluding `ineffOr` and `seceffOr`
- `<cure>`: `cure | cure1 | cure2 | cure2c | cure3 | cure3c`
    - If `cure` is provided, it is used to describe the curing process
    - `cure1` indicates 1 save is needed to cure
    - `cure2` indicates 2 saves are needed to cure
    - `cure2c` indicates 2 consecutive saves are needed to cure
    - `cure3` indicates 3 saves are needed to cure
    - `cure3c` indicates 3 consecutive saves are needed to cure
- `extra`, if provided, will be shown at the bottom of the block

#### ::spell

This creates a stat block for a spell.

`::spell{source="" <schoolinfo> <subschool>? <descriptors>? <levels> faith?="" <castingtime>? <components> <range>? <targeting>? <duration> <savingthrow> <spellresist> <saveresistmods>?}`

- `source`: describes the source material(s) in `SOURCE text` format
- `<schoolinfo>`: `enchantment | abjuration | conjuration | divination | illusion | necromancy | transmutation | evocation | universal | school=""`
    - If `school` is provided, it is printed verbatim
    - Otherwise, `enchantment` indicates an enchantment spell, `illusion` indicates an illusion, etc.
- `<subschool>`: `compulsion? charm? creation? calling? shadowSub? summoning? teleportation? healing? figment? glamer? pattern? phantasm? polymorph? scrying?`
    - `shadowSub` indicates the shadow subschool; all other props are self-explanatory
    - Multiple subschools may be present
- `<descriptor>`: `acid? air? chaotic? cold? curse? darkness? death? disease? draconic? earth? electricity? emotion? evil? fear? fire? force? glamer? good? haunted? languageDependant? lawful? light? meditative? mindAffecting? pain? poison? ruse? shadowDesc? sonic? water?`
    - `shadowDesc` indicates the shadow descriptor
    - `mindAffecting` and `languageDependent` map to mind-affecting and language-dependant, respectively
    - All other props are self-explanatory; multiple descriptors may be used
- `<levels>`: `adp?=## alc?=## ant?=## arc?=## bld?=## brd?=## clr?=## drd?=## hnt?=## inq?=## inv?=## mag?=## med?=## mes?=## occ?=## orc?=## pal?=## psy?=## rgr?=## rma?=## sha?=## skd?=## sor?=## spr?=## sum?=## usm?=## war?=## wit?=## wiz?=##`
    - These properties describe which spellcasting list(s) the spell belongs to, and at what level
        - Example: `wiz=5` indicates a 5th-level wizard spell
    - **At least one** of these props must be present
    - Here is the list of all the properties mapped to their spellcasting list
        - `adp` = Adept
        - `alc` = Alchemist
        - `ant` = Antipaladin
        - `arc` = Arcanist
        - `bld` = Bloodrager
        - `brd` = Bard
        - `clr` = Cleric
        - `drd` = Druid
        - `hnt` = Hunter
        - `inq` = Inquisitor
        - `inv` = Investigator
        - `mag` = Magus
        - `med` = Medium
        - `mes` = Mesmerist
        - `occ` = Occultist
        - `orc` = Oracle
        - `pal` = Paladin
        - `psy` = Psychic
        - `rgr` = Ranger
        - `rma` = Red Mantis Assassin
        - `sha` = Shaman
        - `skd` = Skald
        - `sor` = Sorcerer
        - `spr` = Spiritualist
        - `sum` = Summoner
        - `usm` = Unchained Summoner
        - `war` = Warpriest
        - `wit` = Witch
        - `wiz` = Wizard
- `faith` is the name of a deity or faith this spell is associated with
- `<castingtime>`: `ct="" | ctFRA | ctIm | ctSw | ctSt | ctH=## | ctM=## | ctR=##`
    - `ct` describes the casting time as a string
    - `ctFRA` indicates a casting time of 1 full-round action
    - `ctIm` is 1 immediate action
    - `ctSw` is 1 swift action
    - `ctSt` is 1 standard action
    - `ctH` is the casting time in hours
        - Example: `ctH=1` => `"1 hour"`
    - `ctM` is the casting time in minutes
    - `ctR` is the casting time in rounds
- `<components>`: `cSpecial="" | cV? cS? cM? cDF? cF? cMDF? cMp?="" cFp?="" cMDFp?="" cFDFp?="" cText?`
    - If `cSpecial` is present, it is used to describe the spell's components
    - Otherwise, **at least one** of the other properties must be used
        - `cV` indicates verbal components
        - `cS` is somatic components
        - `cM` indicates material components
        - `cDF` means a divine focus is required
        - `cF` indicates a focus is required
        - `cMDF` indicates either a material component or divine focus must be used
        - `cMp` indicates a material component, and the contents of the prop will be added inside of parentheses after it
            - Example: `cMp="a copper piece"` => `"M (a copper piece)"`
            - `cFp` works the same, but for a focus component
            - `cMDFp` works the same, but for a M/DF component
            - `cFDFp` likewise work the same, but for a F/DF component
        - `cText` will add `"; see text"` to the end of the components line
    - Some props **conflict** with each other and cannot be used together
        - `cM`, `cMp`, `cMDF`, and `cMDFp` conflict
        - `cF`, `cFp` and `cFDFp` conflict
        - `cDF`, `cMDF`, `cMDFp`, and `cFDFp` conflict
- `<range>`: `r="" | rTouch | rPers | rClose | rMed | rLong | rText | rFt=##`
    - If `r` is present, it is used as the range info
    - `rTouch` is a range of Touch
    - `rPers` is a range of Personal
    - `rClose` is Close range (25 ft. + 5 ft./2 levels)
    - `rMed` is Medium range(100 ft. + 10 ft./level)
    - `rLong` is Long range (400 ft. + 40 ft./level)
    - `rText` prints `"see text"` as the range
    - `rFt` is a range measured in feet
- `<targeting>` has three possible sections: `<targeting>? <areas>? effect?=""`
    - `<targeting>`: `target="" | targets="" | targetOrTargets=""`
        - All three props contain text, and refer to a **Target**, **Targets**, or **Target or Targets** line
    - `<areas>`: `area="" | areaOrTarget="" | targetOrArea=""`
        - All three contain text and refer to **Area**, **Area or Target**, and **Target or Area** lines
    - `effect` is the text for an **Effect** line
- `<duration>`: `dur="" | <specificduration> durD?`
    - If `dur` is present, it will be used as the durtion text
    - `<specificduration>`: `durR=## | durM=## | durH=## | durC | durCon="" | durI | durP | durRL=## | durML=## | durHL=## | durDL=##`
        - `durR` indicates the duration in rounds
        - `durM` and `durH` indicate a duration in minutes or hours
        - `durC` indicates a duration of `"concentration"`
        - `durCon` also indicates concentration, but the text will be directly appended
            - Example: `durCon=", up to a minute"` => `"concentration, up to a minute"`
        - `durI` is an instantaneous duration
        - `durP` indicates permanent duration
        - `durRL`, `durML`, and `durHL` are rounds/minutes/hours per level
            - Example: `durML=10` => `"10 minutes/level"`
        - `durDL` indicates days per level
    - If `drD` is present, the spell is dismissable, which is indicated by `" (D)"` at the end of the duration
- `<savingthrow>`: `save="" | saveNo | fort | fortHalf | fortPartial | refl | reflHalf | reflPartial | will | willDisbelief | willHalf | willPartial`
    - If `save` is present, it will be used as the saving throw information
    - `saveNo` indicates no saving throw allowed
    - `fort` means Fortitude negates
        - `fortHalf` means Fortitude half
        - `fortPartial` means Fortitude partial
    - `refl` means Reflex negates
        - `reflHalf` and `reflPartial` behave as above
    - `will` means Will negates
        - `willHalf` and `willPartial` work as the others above
        - `willDisbelief` means Will disbelief
- `<spellresist>`: `sr="" | srY | srN`
    - If `sr` is present, it is used as the spell resistance info
    - `srY` means it allows spell resistance
    - `srN` means it does not allow SR
- `<saveresistmods>`: `svHarmless? svObject? srHarmless? srObject? | harmless? object?`
    - `svHarmless` means (harmless) should be appended to the saving throw
    - `svObject` means (object) should be appended to the saving throw
    - `srHarmless` means (harmless) should be appended to the spell resistance info
    - `srObject` means (object) should be appended to the spell resistance info
    - `harmless` means (harmless) should be appended to BOTH
    - `object` means (object) should be appended to BOTH

#### minfo

This prints out the first part of a monster's stat block

`minfo[Optional race/class]{source="" xp=## <alignment> <size> <type> <subtyping>? init="" <senses> aura?=""}`

- `source` is the monster's source information, in `SOURCE text` format
- `xp` is the amount of XP the monster is worth
- `<alignment>`: `al="" | lg | ln | le | ng | n | ne | cg | cn | ce`
    - If `al` is provided, it is used verbatim
    - Otherwise, the given alignment will be used (`lg` = `LG` (lawful good))
- `<size>`: `fine | diminutive | tiny | small | medium | large | huge | gargantuan | colossal`
    - Indicates the monster's size category
- `<type>`: `aberration | animal | construct | dragon | fey | humanoid | magicalBeast | monstrousHumanoid | ooze | outsider | plant | undead | vermin`
    - Indicates the monster's type
        - `monstrousHumanoid` = monstrous humanoid
        - `magicalBeast` = magical beast
- `<subtyping>`: `subtypes="" | subs?="" othersubs?="" augment?=""
    - If `subtypes` is present, it will be surrounded by parentheses and added to the text
    - `subs` is a list of subtypes that have entries in `subtypes.json`, separated by `"~"`
    - `othersubs` is a list of other subtypes the monster has, also separated by `"~"`
    - `augment` indicates the special augmented subtype, and the text should be the type being augmented
        - Example: `augment:humanoid` is an augmented humanoid, while `augment:"monstrous humanoid"` is an augmented monstrous humanoid
- `init` is the initiative modifier, either `"+##"` or `"-##"`
- `<senses>`: `sen?="" senSpell?="" dv?=## llv? keenscent? scent? thoughtsense?=## greensight? lifesense? blindsight?=## blindsense?=## tremorsense?=## mistsight? xray? aav? sid? pcp?=""`
    - `sen` is a list of senses not covered by any other prop, separated by `"~"`
    - `senSpell` is a list of spells listed in the monster's senses, separated by `"~"`
    - `dv` indicates darkvision, e.g. `dv=60` = darkvision 60 ft
    - `llv` indicates low-light vision
    - `keenscent` is the keen scent trait
    - `scent` is the scent trait
    - `thoughtsense` indicates the range of the monster's thoughtsense
    - `greensight` indicates the greensight ability
        - It may optionally include the distance, e.g. `greensight=60` is greensight 60 ft.
    - `lifesense` is the lifesense ability, and may optionally include a distance as `greensight` does
    - `blindsight`, `blindsense` and `tremorsense` all indicate their respective abilities, and must include a distance
        - Example: `tremorsense=60` = tremorsense 60 ft.
    - `mistsight` is the rare mistsight ability
    - `xray` indicates x-ray vision
    - `aav` indicates all-around vision
    - `sid` is the see in darkness ability
    - `pcp` is the monster's Perception modifier, either `"+##"` or `"-##"`
- `aura` is text describing any auras the monster emanates
