import * as yup from "yup";

export const createNoteSchema = yup.object().strict().shape({
    body: yup.object({
        status: yup
            .mixed()
            .oneOf(['active', 'archived'])
            .defined()
            .required('Status is required'),
        name: yup.string().required('Name is required'),
        content: yup.string().required('Content is required'),
        category: yup
            .mixed()
            .oneOf(['Task', 'Random Thought', 'Idea'])
            .defined()
            .required('Category is required'),
    })
        .noUnknown(true)
})