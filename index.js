const EntityEndermite = Java.type("net.minecraft.entity.monster.EntityEndermite")
const key = new KeyBind("Enable ThystHider", Keyboard.KEY_NONE, "ThystHider")

let enabled = false;

key.registerKeyPress(() => {
    enabled = !enabled;

    if(enabled) ChatLib.chat("§4[§cThystHider§4] §5ThystHider §2Enabled!");
    else ChatLib.chat("§4[§cThystHider§4] §5ThystHider §4Disabled!");
})

register("renderEntity", (ent, pos, pt, event) => {
    if(!enabled) return;
    if(ent instanceof EntityEndermite) {
        cancel(event);
        ent.func_70106_y()
    }
})
