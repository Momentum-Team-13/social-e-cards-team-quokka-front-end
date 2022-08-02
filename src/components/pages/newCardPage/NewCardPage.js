
import { PreviewForm } from '../../createCard/CreateCard'

export default function NewCard({ token }) {
    console.log(token)
    return (
        <div>
            <PreviewForm token={token}></PreviewForm>

        </div>

    )
}