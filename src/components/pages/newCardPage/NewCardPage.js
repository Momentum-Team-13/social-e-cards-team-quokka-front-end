import cards from '../../../sample-card-data'
import { useState, useRef } from 'react'
import { PreviewForm } from '../../createCard/CreateCard'
import axios from 'axios'

export default function NewCard() {
    return (
        <div>
            <PreviewForm></PreviewForm>

        </div>

    )
}