'use client'

import { CreateProjectSchema } from '@/lib/formValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '../ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import DynamicForm from './FieldArray'

const CreateProjectForm = () => {
    const form = useForm<z.infer<typeof CreateProjectSchema>>({
        resolver: zodResolver(CreateProjectSchema),
        defaultValues: {
            title: '',
            description: '',
            tags: '',
            links: {
                title: '',
                url: '',
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof CreateProjectSchema>) => {
        console.log(values)
    }

    return (
        <div className='max-w-2xl rounded-md bg-neutral-900 p-5'>
            <h3 className='mb-3 text-xl font-medium text-gray-400'>
                Create Project Form
            </h3>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-5'
                >
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project title</FormLabel>
                                <FormControl>
                                    <Input
                                        className='h-11 border-gray-500'
                                        placeholder='Enter project title...'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className='border-gray-500'
                                        placeholder='Enter project description...'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='tags'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <Input
                                        className='h-12 border-gray-500'
                                        placeholder='tags seperated by comma ( , )'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <DynamicForm />

                    <Button type='submit'>Save</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateProjectForm
