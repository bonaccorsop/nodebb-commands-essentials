# NodeBB Commands Essentials

This plugin is meant to test and expose the NodeBB cmd feature.

With this feature, plugins can register their own cli commands.
You can call the plugin command by executing:

`./nodebb cmd <plugin-name>:<custom-command> [options]`

You can register your plugin command in **plugin.json** with the **commands** block

**plugin.json**
```
...
"commands": [
  {
    "cmd": "custom-command",
    "library": "./cmd.js",
    "method": "callMyCommand",
    "description": "This is a command example",
    "options": [
	{ "flags": "-m, --myoption1", "description": "Option 1"},
	{ "flags": "-n, --myoption2", "description": "Option 2"}
     ]
  }
 ]
```

In this scenario, NodeBB will call your _cmd.js_ script and will call the _callMyMethod_ function.
The script file will be like this:

**cmd.js**
```
"use strict";

module.exports = {

  callMyMethod: function (options, done) {
    // ... do my stuff
    console.log('Command executed!');
    done();
  },

}
```

This feature uses the NodeBB embedded **commander.js** for registering custom command.
You can have the plugin commands list executing:
`./nodebb cmd --help`





