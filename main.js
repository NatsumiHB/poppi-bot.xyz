fetch("https://natsumi.dev/poppi_api/avatar_url")
.then(res => res.text())
.then(res => document.getElementById("avatar").src = res);

fetch("https://natsumi.dev/poppi_api/server_count")
.then(res => res.text())
.then(res => document.getElementById("server-count").appendChild(document.createTextNode(`I'm on ${res} servers!`)));

fetch("https://natsumi.dev/poppi_api/commands")
.then(res => res.json())
.then(res => {
    Object.keys(res).forEach(cog => {
        let cog_commands = document.createElement("ul");
        let cog_header = document.createElement("h2");
        let cog_name = document.createTextNode(cog);
        cog_header.appendChild(cog_name);
        cog_commands.appendChild(cog_header);

        Object.keys(res[cog]).forEach(command => {
            let li = document.createElement("li");
            let command_name = document.createTextNode(`${command}: ${res[cog][command]}`);
            li.appendChild(command_name);
            cog_commands.appendChild(li);
        });
        document.getElementById("commands").appendChild(cog_commands);
    })
});