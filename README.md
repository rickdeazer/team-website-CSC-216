# Team Name: TEAM CONNECTYLE

**Live site:**https://github.com/rickdeazer/team-website-CSC-216

## Team
| Name  | Registration no. | GitHub username |
|------ |------------------|-----------------|
| Samuel|   com/3413/26    |thebutch92-code
|patrick|  com/3457/26     |   rickdeazer    |

## Who drove each part
- Part 0, 2, 4: Patrick ngotho
- Part 1, 3: Samuel Mathenge

## Personalisation
- Our colours:-  Light mode uses deep teal primary (`#0f6e6e`), dark teal hover (`#0a5050`), off-white background (`#f6f7f4`), pure white surfaces (`#ffffff`), and charcoal text (`#1c2430`). Dark mode uses bright cyan-teal primary (`#4fc1c1`), dark slate background (`#11161d`), dark surface cards (`#1a212b`), and light gray text (`#e7ebf0`).

- Projects we added:-  File Compression Algorithm, Operating System Process Scheduler, Peer-to-Peer File Sharing, Database Management System, Compiler for a Custom Language, Computer Network Traffic Analyzer, Pathfinding Algorithm Visualizer, Distributed Task Queue, Password Security Analyzer, Version Control System, Search Engine, and Digital Logic Circuit Simulator.

- Extension challenge(s) completed: E3: Project search (live keyword search input on projects.html)


## Reflection
1.You lose built-in keyboard navigation and semantic button recognition for assistive technology
visually impaired screen-reader users will not know it is a clickable button.

2.Adding defer tells the browser to download script.js in the background while continuing to parse the rest of the HTML, waiting to execute the script until the entire DOM is completely built.
Removing it would cause the JavaScript to run before the HTML has been parsed, causing the JavaScript to fail because the page does not exist yet.

3.Using innerHTML with visitor-typed project titles creates a Cross-Site Scriptingsecurity vulnerability, allowing attackers to inject and execute malicious JavaScript code in other visitors' browsers.


4.client-side JavaScript validation can be easily bypassed or disabled by users and attackers.


5.Double clicking the file to live server changes the origin, forcing the browser to use a separate, isolated local storage space

6.Navigation bars and footers are commonly duplicated across the HTML pages.
• Problem: Updating a link or fixing a typo requires manually editing every page, which wastes time and causes inconsistencies.
• Solution: Store the shared code in one file and load it automatically using JavaScript, reusable components, or server-side includes.
