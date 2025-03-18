import {z} from "zod";
import {Color} from "./enum";

const schema = z.object({
    color: z.nativeEnum(Color)
})