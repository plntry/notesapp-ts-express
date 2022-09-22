import * as yup from "yup";

export const editNoteSchema = yup.object().strict().shape({
    body: yup.object({
        status: yup
            .mixed()
            .oneOf(['active', 'archived']),
        name: yup.string(),
        content: yup.string(),
        category: yup
            .mixed()
            .oneOf(['Task', 'Random Thought', 'Idea'])
    })
        .noUnknown(true)
})