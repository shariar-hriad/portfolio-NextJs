// 'use client'

// import { useFieldArray, useForm } from 'react-hook-form'

// const FieldArray = () => {
//     const { register, control, handleSubmit } = useForm()
//     const {} = useFieldArray({
//         control,
//         name: 'DynamicFields',
//     })

//     return <div>FieldArray</div>
// }

// export default FieldArray

'use client'

import React from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

interface FormData {
    links: { title: string; url: string }[]
}

const DynamicForm: React.FC = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'links',
    })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <Input
                        {...register(`dynamicFields[${index}].fieldName`, {
                            required: 'This field is required',
                        })}
                        name={}
                    />
                    <button type='button' onClick={() => remove(index)}>
                        Remove
                    </button>
                    {errors.dynamicFields &&
                        errors.dynamicFields[index]?.fieldName && (
                            <p>
                                {errors.dynamicFields[index].fieldName.message}
                            </p>
                        )}
                </div>
            ))}
            <button type='button' onClick={() => append({ fieldName: '' })}>
                Add Field
            </button>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default DynamicForm
