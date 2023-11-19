import React from 'react'
import { Container } from '../shared'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='border-t py-3'>
            <Container>
                <span className='block text-center text-sm text-gray-200'>
                    Copyright &copy; {currentYear} <i>Shariar Hossain Riad</i>
                </span>
            </Container>
        </footer>
    )
}

export default Footer
