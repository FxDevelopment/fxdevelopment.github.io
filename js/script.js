// Populate page content
const CONTACTS = {
    "GitHub": {
        "icon": "fab fa-github",
        "value": "FxDevelopment",
        "link": "https://github.com/FxDevelopment"
    },
    "Discord": {
        "icon": "fab fa-discord",
        "value": "Discord",
        "link": "https://discord.gg/VFNTycm"
    }
};

const PROJECTS = {
    "FusionPixelmon": {
        "pict": "https://static.spigotmc.org/img/spigot-og.png",
        "tags": "Java &middot; Sponge &middot; Spigot &middot; Forge &middot; Pixelmon",
        "info": "Adds a little extra to your Pixelmon experience."
    },
    "FxBiomeRTP": {
        "pict": "https://static.spigotmc.org/img/spigot-og.png",
        "tags": "Java &middot; Sponge",
        "info": "Allows players to randomly teleport across the world and to specific biome types."
    }
};

// Projects
let projects = document.getElementById("projects-here");
let item, link, pict, tags, info;
for (let name in PROJECTS) {
    item = PROJECTS[name];
    link = item["link"];
    pict = item["pict"];
    tags = item["tags"];
    info = item["info"];

    let html = link ? `<a href="${link}" class="project-item">` : `<div class="project-item">`;
    html += `
<div class="project-img">
    <img src="${pict}"/>
</div>
<div class="project-info">
    <h2>${name}</h2>
    <span class="tags">${tags}</span>
    <span>${info}</span>
</div>`;
    html += link ? `</a>` : `</div>`;
    projects.innerHTML += html;
}

// Contacts
let contacts = document.getElementById("contact-here");
let icon, value;
for (let name in CONTACTS) {
    item = CONTACTS[name];
    icon = item["icon"]
    value = item["value"]
    link = item["link"];

    contacts.innerHTML += `
<a href="${link}" class="undecorated">
    <i class="${icon}"></i>
    <span class="name">${name}</span>
    <span class="value">${value}</span>
</a>`;
}
