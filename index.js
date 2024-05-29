const EntityEndermite = Java.type("net.minecraft.entity.monster.EntityEndermite")

register("renderEntity", (ent, pos, pt, event) => {
    if(ent instanceof EntityEndermite) cancel(event);
})