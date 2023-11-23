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
                    <input
                        {...register(`links[${index}].title`, {
                            required: 'This field is required',
                        })}
                    />
                    <input
                        {...register(`links[${index}].url`, {
                            required: 'This field is required',
                        })}
                    />
                    <button type='button' onClick={() => remove(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button
                type='button'
                onClick={() => append({ title: '', url: '' })}
            >
                Add Field
            </button>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default DynamicForm
