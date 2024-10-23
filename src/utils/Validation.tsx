import z from "zod"
const ValidateInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
})
export default ValidateInput;

